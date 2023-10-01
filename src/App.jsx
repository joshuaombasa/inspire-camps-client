import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Host from './pages/Host'
import Camps from './pages/camps/Camps'
import Login from './pages/Login'
import SingleCamp from './pages/camps/SingleCamp'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import HostCamps from './pages/host/HostCamps'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostCampDetails from './pages/host/HostCampDetails'
import SelectedVanDetails from './components/SelectedVanDetails'
import SelectedVanPrice from './components/SelectedVanPrice'
import SelectedVanPhtos from './components/SelectedVansPhotos'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='camps' element={<HostCamps />} />
        <Route path='camps/:id' element={<HostCampDetails />} >
          <Route index element={<SelectedVanDetails />} />
          <Route path='pricing' element={<SelectedVanPrice />} />
          <Route path='photos' element={<SelectedVanPhtos />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='camps' element={<Camps />} />
      <Route path='camps/:id' element={<SingleCamp />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
