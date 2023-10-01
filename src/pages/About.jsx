import React from "react";
import { Link } from "react-router-dom";
import aboutPageImg from "../assets/about--page.jpg"
export default function About () {
    return (
        <div className="about--page">
            <img src={aboutPageImg} alt="" />
            <div className="about--page--container">
                <h1>Discover the Great Outdoors with Inspirecamps</h1>
                <p>Welcome to your one-stop destination for unforgettable camping experiences across the country. Whether you're a seasoned explorer or a first-time camper, we've got the perfect site waiting for you in every corner of this beautiful land.</p>
                <p>Our camping sites are strategically located near some of the nation's most iconic national parks and natural wonders. Wake up to stunning vistas and immerse yourself in the rich history and pristine landscapes of our great country.</p>
                <div className="lower--about--page">
                    <h2>Your destination is waiting. Your camp is ready.</h2>
                    <Link to="/camps">Explore our camps</Link>
                </div>
            </div>
        </div>
    )
}