import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render,screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";

function renderLoginComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Login/>}/>
    ))

    render(<RouterProvider  router={router}/>)
}

describe('About Component', () => {
    test('renders component elements as expected', () => {
        renderLoginComponent()

        const signInHeading = screen.getByRole('heading', {name: /Sign in to your account/i})
        expect(signInHeading).toBeInTheDocument()
        const emailInput = screen.getByPlaceholderText('Email address')
        expect(emailInput).toBeInTheDocument()
        const passwordInput = screen.getByPlaceholderText('Password')
        expect(passwordInput).toBeInTheDocument()
        const loginButton = screen.getByRole('button', {name: /Log in/i})
        expect(loginButton).toBeInTheDocument()
    })

    test('handleSubmit function is  called when log in buttin is clicked', () => {
        renderLoginComponent()
        
        const emailInput = screen.getByPlaceholderText(/Email address/i)
        const passwordInput = screen.getByPlaceholderText(/Password/i)
        const loginButton = screen.getByRole('button', {name: /Log in/i})

        fireEvent.change(emailInput, {target: {value : 'hoeombasa@peemail.com'}})
        fireEvent.change(passwordInput, {target: {value: 'fuheufweufhwu'}})
        fireEvent.click(loginButton)
    })
})
