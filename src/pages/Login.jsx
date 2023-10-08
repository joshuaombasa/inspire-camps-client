import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })

    const [error, setError] = React.useState(null)

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
                navigate("/host")
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
                {error && <h3 className="red">{error.message}</h3>}
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