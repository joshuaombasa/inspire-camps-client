import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedCampPrice() {
    const hostCamp = useOutletContext()

    return (
        <h2 className="price">${hostCamp.price}/day</h2>
    )
}