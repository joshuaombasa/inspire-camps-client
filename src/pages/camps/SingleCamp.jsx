import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
export default function SingleCamp() {

    const { id } = useParams()

    const [currentCamp, setCurrentCamp] = useState(null)

    const location = useLocation()
    // console.log(location.state)

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/camps/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentCamp(data)
            })
    }, [])

    const path = location.state.search ?  `?${location.state.search}` : ""

    const backText = location.state.typeFilter ? location.state.typeFilter : "all"


    if (!currentCamp) {
        return <h1>Loading...</h1>
    }

    const styles = {
        backgroundColor : currentCamp.type === "simple" ? "#115E59"  :  currentCamp.type === "luxury" ? "goldenrod" : "#FFCC8D"
    }



    return (
        <div className="single--camp--page">
            <Link
                className="back--link"
                relative="path"
                to={`..${path}`}
            >&larr; <span className="back--link--text">Back to {backText} camps</span></Link>
            <div className="single--camp--page--container">
                <img src={currentCamp.imageUrl} alt="" />
                <span style={styles}>{currentCamp.type}</span>
                <h1>{currentCamp.name}</h1>
                <h3>${currentCamp.price}/day</h3>
                <p>{currentCamp.description}</p>
                <Link>Rent this camp</Link>
            </div>
        </div>
    )
}