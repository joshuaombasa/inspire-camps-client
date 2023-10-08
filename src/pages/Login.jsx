import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginUser } from "../api";

export function loader({request}) {
    // const text = request

}

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })

    const [error, setError] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const message = searchParams.get("message")

    const navigate = useNavigate()

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
                navigate("/host", {replace: true})
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
                <form onSubmit={handleSubmit} className="login--form">
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
                    <button>Sign in</button>
                </form>
                <p>Dont have an account? <span>Create one now</span></p>
            </div>
        </div>
    )
}