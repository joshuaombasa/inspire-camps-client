import React from "react";
import { useSearchParams, Form, useActionData, redirect, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return null

}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    console.log({ email, password })

    try {
        const data = await loginUser({ email, password })
        console.log(data)
        throw redirect("/host")
    } catch (error) {
        return error
    }
    return null
}

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })

    // const [error, setError] = React.useState(null)
    const error = useActionData()
    const [searchParams, setSearchParams] = useSearchParams()
    const message = searchParams.get("message")

    const navigate = useNavigation()
    console.log(navigate.state)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name]: value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setError(null)
        async function handleLogin() {
            try {
                const data = await loginUser(formData)
                console.log(data)
                navigate("/host", { replace: true })
            } catch (error) {
                setError(error)
            }
        }
        handleLogin()
    }

    return (
        <div className="login--page">
            <div className="login--page--container">
                <h2>Sign in to your account</h2>
                {message && <h3 className="red">{message}</h3>}
                {error && <h4 className="red">{error.message}</h4>}
                <Form method="post" className="login--form">
                    <input
                        className="input--top"
                        type="email"
                        placeholder="Email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className="input--bottom"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button disabled={navigate.state === "submitting"}>
                        {navigate.state === "submitting" ? "Logging in.." : "Log in"}
                    </button>
                </Form >
                <p>Dont have an account? <span>Create one now</span></p>
            </div>
        </div>
    )
}