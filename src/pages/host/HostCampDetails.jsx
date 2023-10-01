import React from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
export default function HostCampDetails({camp}) {
    const {id} = useParams()
    const [hostCamp, setHostCamp] = React.useState(null)

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/camps/${id}`)
             .then(res => res.json())
             .then(data => setHostCamp(data))
    }, []) 

    if (!hostCamp) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="host--camp--details">
            <Link 
               className="back--link"
               relative="path"
               to=".."
            >&larr; <span className="back--link--text"
            >Back to all camps</span></Link>
            <div className="top--section">
                <img src={hostCamp.imageUrl} alt="" />
                <div className="text--section">
                    <span>{hostCamp.type}</span>
                    <h2>{hostCamp.name}</h2>
                    <h3>${hostCamp.price}/day</h3>
                </div>
            </div>
            <nav>
                <NavLink 
                      to="."
                      end
                      className={({isActive}) => isActive === true ? "active--style" : "" }
                >Details</NavLink>
                <NavLink 
                      to="pricing"
                      className={({isActive}) => isActive === true ? "active--style" : "" }
                >Pricing</NavLink>
                <NavLink 
                      to="photos"
                      className={({isActive}) => isActive === true ? "active--style" : "" }
                >Photos</NavLink>
            </nav>
            <Outlet context={hostCamp}/>
        </div>
    )
}