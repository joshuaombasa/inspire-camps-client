

export async function getCamps() {
    const res = await  fetch("http://localhost:3000/api/camps")
    if (!res.ok) {
        throw {
            message : "Failed to fetch",
            statusText : res.statusText,
            status : res.status
        };
    }

    const data = await res.json()
    return data
}

export async function getSingleCamp(id) {
    const res = await  fetch(`http://localhost:3000/api/camps/${id}`)
    if (!res.ok) {
        throw {
            message : "Failed to fetch",
            statusText : res.statusText,
            status : res.status
        };
    }

    const data = await res.json()
    return data
}

export async function getHostCamps() {
    const res = await fetch("http://localhost:3000/api/host/camps")
    if (!res.ok) {
        throw {
            message : "Failed to fetch",
            statusText : res.statusText,
            status : res.status
        };
    }

    const data = await res.json()
    return data
}

export async function getSingleHostCamp(id) {
    const res = await  fetch(`http://localhost:3000/api/camps/${id}`)
    if (!res.ok) {
        throw {
            message : "Failed to fetch",
            statusText : res.statusText,
            status : res.status
        };
    }

    const data = await res.json()
    return data
}