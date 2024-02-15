import React from "react";

import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Camps from './pages/camps/Camps'

function renderComponent() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Camps />} />
    ))

    render(<RouterProvider router={router} />)
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve([
                { id: 1, name: 'cafehiskey', imageUrl: 'camp1.jpg', price: 100, type: 'luxury' },
                { id: 2, name: 'evebach', imageUrl: 'camp2.jpg', price: 150, type: 'simple' },
            ]),
    })
);

describe('Camps Component', () => {
    test('shows loading text when  loading state = true', async () => {
        renderComponent()
        await waitFor(async () => {
            const loadingText = await screen.findByRole('heading', { name: /Loading.../i })
            expect(loadingText).toBeInTheDocument()
        })
    })

    test('shows filter buttons after data is fetched', async () => {
        const filterButtons = ['Simple', 'Luxury', 'rustic', 'Clear filter']
        renderComponent()

        await waitFor(async () => {
            for (let button of filterButtons) {
                const filterButton = await screen.findByRole('button', { name: new RegExp(button) })
                expect(filterButton).toBeInTheDocument()
            }
          
        })
    })

    test('renders data after fetching', async () => {
        const campsData = [
            { id: 1, name: 'cafehiskey', imageUrl: 'camp1.jpg', price: 100, type: 'luxury' },
            { id: 2, name: 'evebach', imageUrl: 'camp2.jpg', price: 150, type: 'simple' },
        ]
        renderComponent()

        await waitFor(async () => {
            for (let camp of campsData) {
                const campName = await screen.findByRole('heading', {name: new RegExp(camp.name)})
                expect(campName).toBeInTheDocument()
                const campPrice = await screen.findByText(new RegExp(camp.name))
                expect(campPrice).toBeInTheDocument()
                const campType = await screen.findByText(camp.type)
                expect(campType).toBeInTheDocument()
             }
          
        })
    })
})