import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="home--page">
            <div className="home--page--container">
                <h1>Escape. Explore. Embrace. Welcome to Inspirecamps</h1>
                <p data-testid="homeParagraph">Unplug from the digital world and reconnect with the great outdoors. Whether you're an experienced camper or a first-time adventurer, our campsite provides the ideal backdrop for creating lasting memories. Explore lush forests, serene lakes, and hiking trails that lead to stunning vistas. Roam free and awaken your inner explorer.</p>
                <Link to="/camps">Find your camp</Link>
            </div>
        </div>
    )
}