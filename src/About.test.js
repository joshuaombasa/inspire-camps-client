import React from "react";

import '@testing-library/jest-dom'
import { render,screen } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./pages/About";

function renderAboutComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<About/>}/>
    ))

    render(<RouterProvider  router={router}/>)
}

describe('About Component', () => {
    test('renders component elements as expected', () => {
        renderAboutComponent()

        const aboutPage = screen.getByTestId('aboutPage')
        expect(aboutPage.querySelector('h1')).toBeInTheDocument()
        expect(aboutPage.querySelector('h2')).toBeInTheDocument()
        expect(aboutPage.querySelectorAll('p').length).toEqual(2)
        const exploreCampsLink = screen.getByRole('link', {name: /Explore our camps/i})
        expect(exploreCampsLink).toBeInTheDocument()
        expect(exploreCampsLink.getAttribute('href')).toBe('/camps')
    })
})