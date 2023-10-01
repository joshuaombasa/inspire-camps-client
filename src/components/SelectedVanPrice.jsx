import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedVanPrice() {
    const hostCamp = useOutletContext()

    return (
        <h2 className="price">${hostCamp.price}/day</h2>
    )
}