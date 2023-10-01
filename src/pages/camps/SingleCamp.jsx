import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleCamp() {

    const { id } = useParams()

    const [currentCamp, setCurrentCamp] = useState(null)

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/camps/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentCamp(data)
            })
    }, [])

    if (!currentCamp) {
        return <h1>Loading...</h1>
    }



    return (
        <div className="single--camp--page">
            <Link
                className="back--link"
                relative="path"
                to=".."
            >&larr; <span className="back--link--text">Back to all camps</span></Link>
            <div className="single--camp--page--container">
                <img src={currentCamp.imageUrl} alt="" />
                <span>{currentCamp.type}</span>
                <h1>{currentCamp.name}</h1>
                <h3>${currentCamp.price}/day</h3>
                <p>{currentCamp.description}</p>
                <Link>Rent this camp</Link>
            </div>
        </div>
    )
}