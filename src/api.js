

export async function getCamps() {
    const res = await  fetch("http://localhost:3000/api/camps")
    if (!res.ok) {
        throw console.error( {
            mesage : "Failed to fetch",
            statusText : error.statusText,
            status : error.status
        });
    }

    console.log(res)

    const data = await res.json()
    return data
}

export async function getSingleCamp(id) {
    const res = await  fetch(`http://localhost:3000/api/camps/${id}`)
    const data = await res.json()
    return data
}

export async function getHostCamps() {
    const res = await fetch("http://localhost:3000/api/host/camps")
    const data = await res.json()
    return data
}

export async function getSingleHostCamp(id) {
    const res = await  fetch(`http://localhost:3000/api/camps/${id}`)
    const data = await res.json()
    return data
}