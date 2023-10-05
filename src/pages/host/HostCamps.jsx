import React, {useState} from "react";
import { Link, useLoaderData} from "react-router-dom";
import HostCampItem from "../../components/HostCampItem";
import { getHostCamps } from "../../api";

export function loader() {
    return getHostCamps()
}

export default function HostCamps() {
    const hostCamps = useLoaderData()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // React.useEffect(() => {
    //     async function fetchHostCamps() {
    //         setLoading(true)
    //         try {
    //             const data = await getHostCamps()
    //             setHostCamps(data)
    //         } catch (error) {
    //             setError(error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchHostCamps()
    // }, [])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (error) {
        return (
            <pre>Error : {error.message}</pre>
        )
    }

    const hostCampElements = hostCamps.map(camp => (
        <HostCampItem key={camp.id} camp={camp} />
    ))

    return (
        <div className="host--camps--container">
            {hostCampElements}
        </div>
    )
}