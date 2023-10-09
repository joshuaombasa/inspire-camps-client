import React, {useState} from "react";
import { useParams, NavLink, Link, Outlet , useLoaderData} from "react-router-dom";
import { getSingleHostCamp } from "../../api";
import { authRequired } from "../../utils";

export async function loader({ params, request }) {
    await authRequired(request)
    return getSingleHostCamp(params.id)
}

export default function HostCampDetails({ camp }) {
    const hostCamp = useLoaderData()
    const [error, setError] = useState(null)


    // React.useEffect(() => {
    //     async function fetchHostCamp() {
    //         setLoading(true)
    //         try {
    //             const data = await getSingleHostCamp(id)
    //             setHostCamp(data)
    //         } catch (error) {
    //             setError(error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchHostCamp()
    // }, [])

  

    if (error) {
        return (
            <pre>Error : {error.message}</pre>
        )
    }

    const styles = {
        backgroundColor: hostCamp.type === "simple" ? "#115E59" : hostCamp.type === "luxury" ? "goldenrod" : "#FFCC8D"
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
                    <span style={styles}>{hostCamp.type}</span>
                    <h2>{hostCamp.name}</h2>
                    <h3>${hostCamp.price}/day</h3>
                </div>
            </div>
            <nav>
                <NavLink
                    to="."
                    end
                    className={({ isActive }) => isActive === true ? "active--style" : ""}
                >Details</NavLink>
                <NavLink
                    to="pricing"
                    className={({ isActive }) => isActive === true ? "active--style" : ""}
                >Pricing</NavLink>
                <NavLink
                    to="photos"
                    className={({ isActive }) => isActive === true ? "active--style" : ""}
                >Photos</NavLink>
            </nav>
            <Outlet context={hostCamp} />
        </div>
    )
}