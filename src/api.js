

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

export async function loginUser(formData) {
    // console.log(formData)
    const res = await fetch(`http://localhost:3000/api/login`, {
        method : "post",
        headers: {
            'Content-Type': 'application/json',
          },
        body : JSON.stringify(formData)
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            message : data.message,
            statusText : res.statusText,
            status : res.status,
        }
    }
    
    return data
}