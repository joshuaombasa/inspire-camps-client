import React from "react";

import '@testing-library/jest-dom'
import { render,screen, waitFor } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HostCampDetails from "../pages/host/HostCampDetails";

function renderComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<HostCampDetails/>}/>
    ))

    render(<RouterProvider router={router}/>)
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve({ id: 1, name: 'cafehiskey', imageUrl: 'camp1.jpg', price: 100, type: 'luxury', description: 'an awesome camp' }),
    })
);

describe('HostCampDetails Component', () => {
    test('shows loading text when loading state is true', async () => {
        renderComponent()

        await waitFor(async () => {
            const loadingText = await screen.findByRole('heading', { name: /Loading.../i })
            expect(loadingText).toBeInTheDocument()
        })
    })

    test('renders data after fetching', async () => {
        const camp  = { id: 1, name: 'cafehiskey', imageUrl: 'camp1.jpg', price: 100, type: 'luxury', description: 'an awesome camp' }

        renderComponent()

        await waitFor(async () => {
            const backLink = await screen.findByRole('link', {name: /Back to all camps/i})
            expect(backLink).toBeInTheDocument()
            const campName = await screen.findByRole('heading', {name: new RegExp(camp.name)})
            expect(campName).toBeInTheDocument()
            const campPrice = await screen.findByRole('heading', {name: new RegExp(camp.price)})
            expect(campPrice).toBeInTheDocument()
        })
    })
})