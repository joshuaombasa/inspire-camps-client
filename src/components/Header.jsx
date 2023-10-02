import React from "react";

import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="logo">inspireCamps</Link>
            <nav>
                <NavLink 
                     to="/host"
                     className={({isActive}) => isActive === true ? "active--style" : ""}
                     >Host</NavLink>
                <NavLink 
                     to="/camps"
                     className={({isActive}) => isActive === true ? "active--style" : ""}
                     >Camps</NavLink>
                <NavLink 
                     to="/about"
                     className={({isActive}) => isActive === true ? "active--style" : ""}
                     >About</NavLink>
                <NavLink 
                     to="/login"
                     className={({isActive}) => isActive === true ? "active--style" : ""}
                     >Login</NavLink>
            </nav>
        </header>
    )
}

