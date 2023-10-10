import React, { Suspense, useState } from "react";
import CampsPageCampItem from "../../components/CampsPageCampItem";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { getCamps } from "../../api";

export function loader() {
    return defer({ camps: getCamps() })
}

export default function Camps() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dataPromise = useLoaderData()


    const [searchParams, setSearchParams] = useSearchParams()

    // React.useEffect(() => {
    //     async function fetchCamps() {
    //         setLoading(true)
    //         try {
    //             const data = await getCamps()
    //             setCamps(data)

    //         } catch (error) {
    //             setError(error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchCamps()
    // }, [])



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

    function renderCamps(camps) {
        const filteredCamps = typeFilter
            ? camps.filter(camp => camp.type === typeFilter)
            : camps

        const imgElements = filteredCamps.map(camp => (
            <CampsPageCampItem
                key={camp.id}
                camp={camp}
                typeFilter={typeFilter}
                search={searchParams.toString()}
            />
        ))

        return (
            <>
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
            </>
        )
    }


    return (
        <div className="camps--page">
            <Suspense fallback={<h1>Loading</h1>}>
            <Await resolve={dataPromise.camps}>
                { renderCamps }
            </Await>
            </Suspense>

        </div>
    )
}