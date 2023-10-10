import React, { useState, Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import HostCampItem from "../../components/HostCampItem";
import { getHostCamps } from "../../api";
import { authRequired } from "../../utils";

export async function loader({ request }) {
    await authRequired(request)
    return defer({ camps: getHostCamps() })
}

export default function HostCamps() {
    const hostCampsPromise = useLoaderData()
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

    // const hostCampElements = hostCamps.map(camp => (
    //     <HostCampItem key={camp.id} camp={camp} />
    // ))
    function renderHostCamps(hostCamps) {
        const hostCampElements = hostCamps.map(camp => (
            <HostCampItem key={camp.id} camp={camp} />
        ))
        return (
            <div className="host--camps--container">
                {hostCampElements}
            </div>
        )
    }

    return (
        <>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={hostCampsPromise.camps}>
                    {renderHostCamps}
                </Await>
            </Suspense>
        </>
    )
}