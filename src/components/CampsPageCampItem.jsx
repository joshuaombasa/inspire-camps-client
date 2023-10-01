import React from "react";
import { Link } from "react-router-dom";
export default function CampsPageCampItem({ camp }) {
    return (
        <div className="CampsPageCampItem">
            <Link to={camp.id}>
                <img src={camp.imageUrl} alt="" />
                <div className="details">
                    <h3>{camp.name}</h3>
                    <h4>${camp.price}/day</h4>
                </div>
                <span>{camp.type}</span>
            </Link>
        </div>
    )
}