import React from "react";
import { Link, useParams } from "react-router-dom";

export default function HostCampItem({ camp }) {

    return (
        <>
            <Link to={camp.id}>
                <div className="host--camp--item">
                    <img src={camp.imageUrl} alt="" />
                    <div className="info">
                        <h3>{camp.name}</h3>
                        <h4>${camp.price}/day</h4>
                    </div>
                </div>
            </Link>
        </>
    )
}