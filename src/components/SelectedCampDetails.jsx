import React from "react";
import { useOutletContext } from "react-router-dom";
export default function SelectedCampDetails() {
    const hostCamp = useOutletContext()

    return (
        <div className="selected--van--details">
            <p>Name:  <span className="light--text">{hostCamp.name}</span></p>
            <p>Category:  <span className="light--text">{hostCamp.type}</span></p>
            <p>Description:  <span className="light--text">{hostCamp.description}</span></p>
            <p>Visibility: <span className="light--text">Public</span></p>
        </div>
    )
}