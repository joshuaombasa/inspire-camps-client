import React from "react";
import CampsPageCampItem from "../../components/CampsPageCampItem";

export default function Camps() {

    const [camps, setCamps] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3000/api/camps")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCamps(data)
            })
    }, [])

    if (camps.length === 0) {
        return (
            <h1>Loading..</h1>
        )
    }

    const imgElements = camps.map(camp => (
        <CampsPageCampItem key={camp.id} camp={camp} />
    ))
    return (
        <div className="camps--page">
            <div className="camps--page--container">
                {imgElements}
            </div>
        </div>
    )
}