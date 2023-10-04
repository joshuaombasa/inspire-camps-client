import React from "react";
import { Link } from "react-router-dom";
import HostCampItem from "../../components/HostCampItem";
import { getHostCamps } from "../../api";

export default function HostCamps() {
    const [hostCamps, setHostCamps] = React.useState([])

    React.useEffect(() => {
        async function fetchHostCamps() {
            const data = await getHostCamps()
            setHostCamps(data)
        }
        fetchHostCamps()
    },[])

    if (hostCamps.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    const hostCampElements = hostCamps.map(camp => (
        <HostCampItem key={camp.id} camp={camp}/>
    ))

    return (
        <div className="host--camps--container">
        {hostCampElements}
        </div>
    )
}