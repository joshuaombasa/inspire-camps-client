import React from "react";
import { Link } from "react-router-dom";
import HostCampItem from "../../components/HostCampItem";

export default function HostCamps() {
    const [hostCamps, setHostCamps] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3000/api/host/camps")
             .then(res => res.json())
             .then(data => setHostCamps(data))
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