import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <div className="host--layout">
            <nav>
                <NavLink 
                      to="."
                      end
                      className={({isActive}) => isActive === true ? "active--style" : ""}
                >Dashboard</NavLink>
                <NavLink 
                      to="income"
                      className={({isActive}) => isActive === true ? "active--style" : ""}
                >Income</NavLink>
                <NavLink 
                      to="camps"
                      className={({isActive}) => isActive === true ? "active--style" : ""}
                >Camps</NavLink>
                <NavLink 
                      to="reviews"
                      className={({isActive}) => isActive === true ? "active--style" : ""}
                >Reviews</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}