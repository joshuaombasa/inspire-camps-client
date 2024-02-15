import React, { Suspense, useState } from "react";
import CampsPageCampItem from "../../components/CampsPageCampItem";
import { useSearchParams, useLoaderData, defer, Await, Link } from "react-router-dom";
import { getCamps } from "../../api";

// export function loader() {
//     return defer({ camps: getCamps() })
// }

export default function Camps() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    // const dataPromise = useLoaderData()

    const [camps, setCamps] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()



    React.useEffect(() => {
        async function fetchCamps() {
            setLoading(true)
            try {
                const data = await getCamps()
                setCamps(data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCamps()
    }, [])

    if (loading) {
        return (<h1>Loading...</h1>)
    }



    if (error) {
        return (
            <pre>Error : {error.message}</pre>
        )
    }

    function generateNewSerchParams(type, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(type)
        } else {
            sp.set(type, value)
        }

        setSearchParams(sp)
    }

    const typeFilter = searchParams.get("type")

    const filteredCamps = typeFilter
        ? camps.filter(camp => camp.type === typeFilter)
        : camps

    // const styles = {
    //     backgroundColor: camp.type === "simple" ? "#115E59" : camp.type === "luxury" ? "goldenrod" : "#FFCC8D"
    // }

    const imgElements = filteredCamps.map(camp => (
        <div key={camp.id} className="CampsPageCampItem">
            <Link to={camp.id} state={{ typeFilter, search: searchParams.toString() }}>
                <img src={camp.imageUrl} alt="" />
                <div className="details">
                    <h3>{camp.name}</h3>
                    <h4>${camp.price}/day</h4>
                </div>
                <span>{camp.type}</span>
            </Link>
        </div>
    ))

    return (
        <div className="camps--page">
            <nav className="camps--filter">
                <button
                    onClick={() => generateNewSerchParams("type", "simple")}
                >Simple</button>
                <button
                    onClick={() => generateNewSerchParams("type", "luxury")}
                >Luxury</button>
                <button
                    onClick={() => generateNewSerchParams("type", "rustic")}
                >rustic</button>
                <button
                    onClick={() => generateNewSerchParams("type", null)}
                >Clear filter</button>
            </nav>
            <div className="camps--page--container">
                {imgElements}
            </div>
        </div>
    )

    // function renderCamps(camps) {
    //     const filteredCamps = typeFilter
    //         ? camps.filter(camp => camp.type === typeFilter)
    //         : camps

    //     const imgElements = filteredCamps.map(camp => (
    //         <CampsPageCampItem
    //             key={camp.id}
    //             camp={camp}
    //             typeFilter={typeFilter}
    //             search={searchParams.toString()}
    //         />
    //     ))

    //     return (
    //         <>
    //             <nav className="camps--filter">
    //                 <button
    //                     onClick={() => generateNewSerchParams("type", "simple")}
    //                 >Simple</button>
    //                 <button
    //                     onClick={() => generateNewSerchParams("type", "luxury")}
    //                 >Luxury</button>
    //                 <button
    //                     onClick={() => generateNewSerchParams("type", "rustic")}
    //                 >rustic</button>
    //                 <button
    //                     onClick={() => generateNewSerchParams("type", null)}
    //                 >Clear filter</button>
    //             </nav>
    //             <div className="camps--page--container">
    //                 {imgElements}
    //             </div>
    //         </>
    //     )
    // }


    // return (
    //     <div className="camps--page">
    //         <Suspense fallback={<h1>Loading</h1>}>
    //         <Await resolve={dataPromise.camps}>
    //             { renderCamps }
    //         </Await>
    //         </Suspense>

    //     </div>
    // )
}