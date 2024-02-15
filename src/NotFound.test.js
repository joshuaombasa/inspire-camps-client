import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";

function renderComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route  path='/'  element={<NotFound/>}/>
    ))

    render(<RouterProvider router={router}/>)
}

describe('NotFound Component', () => {
    test('renders component elements as expected', () => {
        renderComponent()
        const headingText = screen.getByRole('heading', {name: /Sorry, the page you were looking for was not found/i})
        expect(headingText).toBeInTheDocument()
        const returnHomeLink = screen.getByRole('link',{name : /Return to home/i})
        expect(returnHomeLink).toBeInTheDocument()
    })
})