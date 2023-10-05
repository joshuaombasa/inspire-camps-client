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
import Camps, { loader as campsLoader } from './pages/camps/Camps'
import Login from './pages/Login'
import SingleCamp, { loader as singleCampLoader } from './pages/camps/SingleCamp'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import HostCamps, {loader as hostCampsLoader} from './pages/host/HostCamps'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostCampDetails, { loader as hostCampDetailsLoader } from './pages/host/HostCampDetails'
import SelectedCampDetails from './components/SelectedCampDetails'
import SelectedCampPrice from './components/SelectedCampPrice'
import SelectedCampPhotos from './components/SelectedCampPhotos'
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
        <Route path='camps' element={<HostCamps />} loader={hostCampsLoader}/>
        <Route path='camps/:id' element={<HostCampDetails />} loader={hostCampDetailsLoader}>
          <Route index element={<SelectedCampDetails />} />
          <Route path='pricing' element={<SelectedCampPrice />} />
          <Route path='photos' element={<SelectedCampPhotos />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='camps' element={<Camps />} loader={campsLoader}/>
      <Route path='camps/:id' element={<SingleCamp />} loader={singleCampLoader}/>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
