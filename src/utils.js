import { redirect } from "react-router-dom"

export async function authRequired(request) {
    const isLoggedIn = localStorage.getItem("loggedIn")
    
    const url = new URL(request.url)
    const pathname = url.pathname

    if (!isLoggedIn) {
        throw redirect(`/login?message=you must login first&redirectTo=${pathname}`)
    }
}