import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";


function renderComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Footer/>}/>
    ))

    render(<RouterProvider router={router}/>)
}

describe('Header Component', () => {
    test('renders component elements as expected', () => {
        renderComponent()
        const footerElement = screen.getByText(/Ⓒ 2023 INSPIRECAMPS/i)
        expect(footerElement).toBeInTheDocument()
    })
})