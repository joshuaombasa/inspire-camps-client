import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Foooter from "./Footer";


export default function Layout() {
    return (
        <div className="app">
            <Header />
            <div className="app--container">
                <Outlet />
            </div>
            <Foooter />
        </div>
    )
}