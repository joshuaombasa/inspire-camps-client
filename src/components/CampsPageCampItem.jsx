import React from "react";
import { Link } from "react-router-dom";
export default function CampsPageCampItem({ camp, typeFilter, search }) {

    const styles = {
        backgroundColor : camp.type === "simple" ? "#115E59"  :  camp.type === "luxury" ? "goldenrod" : "#FFCC8D"
    }

    return (
        <div className="CampsPageCampItem">
            <Link to={camp.id} state={{typeFilter, search}}>
                <img src={camp.imageUrl} alt="" />
                <div className="details">
                    <h3>{camp.name}</h3>
                    <h4>${camp.price}/day</h4>
                </div>
                <span style={styles}>{camp.type}</span>
            </Link>
        </div>
    )
}