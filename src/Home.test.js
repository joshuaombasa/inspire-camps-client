import React from "react";

import '@testing-library/jest-dom'
import { render,screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function renderComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Home/>}/>
    ))

    render(<RouterProvider router={router} />)
}

describe('Home Component',() => {
    renderComponent()
    test('renders component elements as expected', () => {
        expect(screen.getByRole('heading')).toBeInTheDocument() 
        expect(screen.getByTestId('homeParagraph')).toBeInTheDocument()
        expect(screen.getByRole('link', {name: /Find your camp/i})).toBeInTheDocument()
    })
})