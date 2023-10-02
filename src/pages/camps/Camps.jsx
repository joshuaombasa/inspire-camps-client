import React from "react";
import CampsPageCampItem from "../../components/CampsPageCampItem";
import { useSearchParams } from "react-router-dom";
export default function Camps() {

    const [camps, setCamps] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    React.useEffect(() => {
        fetch("http://localhost:3000/api/camps")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCamps(data)
            })
    }, [])

    if (camps.length === 0) {
        return (
            <h1>Loading..</h1>
        )
    }

    function generateNewSerchParams(type, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(type)
        } else {
            sp.set(type,value)
        }

        setSearchParams(sp)
    }

    const typeFilter = searchParams.get("type")

    const filteredCamps = typeFilter 
    ? camps.filter(camp => camp.type === typeFilter)
    : camps 

    const imgElements = filteredCamps.map(camp => (
        <CampsPageCampItem 
           key={camp.id} 
           camp={camp} 
           typeFilter={typeFilter} 
           search={searchParams.toString()}
        />
    ))
    return (
        <div className="camps--page">
            <nav className="camps--filter">
                <button
                  onClick={() => generateNewSerchParams("type", "simple")}
                >Simple</button>
                <button
                  onClick={() => generateNewSerchParams("type", "luxury")}
                >Luxury</button>
                <button
                  onClick={() => generateNewSerchParams("type", "rustic")}
                >rustic</button>
                <button
                  onClick={() => generateNewSerchParams("type", null)}
                >Clear filter</button>
            </nav>
            <div className="camps--page--container">
                {imgElements}
            </div>
        </div>
    )
}