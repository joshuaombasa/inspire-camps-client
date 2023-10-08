import { redirect } from "react-router-dom"

export async function authRequired() {
    const isLoggedIn = true

    if (!isLoggedIn) {
        throw redirect("/login?message=you must login first")
    }
}