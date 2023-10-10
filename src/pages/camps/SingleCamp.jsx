import React, { useState, Suspense } from "react";
import { useParams, Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import { getSingleCamp } from "../../api";

export function loader({ params }) {
    return defer({ camp: getSingleCamp(params.id) })
}

export default function SingleCamp() {
    const [error, setError] = useState(null)

    const dataPromise = useLoaderData()

    const location = useLocation()

    // React.useEffect(() => {
    //     async function fetchSingleCamp() {
    //         setLoading(true)
    //         try {
    //             const data = await getSingleCamp(id)
    //             setCurrentCamp(data)
    //         } catch (error) {
    //             setError(error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchSingleCamp()
    // }, [])

    const path = location.state ? `?${location.state.search}` : ""

    const backText = location.state ? location.state.typeFilter : "all"



    if (error) {
        return (
            <pre>Error : {error.message}</pre>
        )
    }



    function renderSingleCamp(currentCamp) {
        const styles = {
            backgroundColor: currentCamp.type === "simple" ? "#115E59" : currentCamp.type === "luxury" ? "goldenrod" : "#FFCC8D"
        }
        return (
            <>
                <Link
                    className="back--link"
                    relative="path"
                    to={`..${path}`}
                >&larr; <span className="back--link--text">Back to {backText} camps</span></Link>
                <div className="single--camp--page--container">
                    <img src={currentCamp.imageUrl} alt="" />
                    <span style={styles}>{currentCamp.type}</span>
                    <h1>{currentCamp.name}</h1>
                    <h3>${currentCamp.price}/day</h3>
                    <p>{currentCamp.description}</p>
                    <Link>Rent this camp</Link>
                </div>
            </>
        )
    }

    return (
        <div className="single--camp--page">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.camp}>
                    {renderSingleCamp}
                </Await>
            </Suspense>
        </div>
    )
}