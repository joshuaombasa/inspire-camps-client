import React from "react";

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })

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
        console.log(formData)
    }

    return (
        <div className="login--page">
            <div className="login--page--container">
                <h2>Sign in to your account</h2>
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