import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedVanPhtos() {
    const hostCamp = useOutletContext()
    return (
      <div className="selected--van--photo">
         <img src={hostCamp.imageUrl} alt="" />
      </div>
    )
}