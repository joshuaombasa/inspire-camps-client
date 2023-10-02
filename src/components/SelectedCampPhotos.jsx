import React from "react";
import { useOutletContext } from "react-router-dom";
import { FaRegEdit } from 'react-icons/fa'
export default function SelectedCampPhotos() {
  const hostCamp = useOutletContext()
  return (
    <div className="selected--van--photo">
      <img src={hostCamp.imageUrl} alt="" />

      <div className="edit--container">
        <FaRegEdit className="edit--icon" />
        <span>Edit</span>
      </div>
    </div>
  )
}