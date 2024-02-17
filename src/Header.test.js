import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Header from "./components/Header";


function renderComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Header/>}/>
    ))

    render(<RouterProvider router={router}/>)
}

describe('Header Component', () => {
    test('renders component elements as expected', () => {
        renderComponent()
        const headerElement = screen.getByRole('banner')
        expect(headerElement).toBeInTheDocument()
        expect(headerElement.querySelectorAll('a').length).toEqual(5)
    })
})