import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Pages/Home.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage.jsx'
import WorkPage from './Components/Pages/WorkPage.jsx'
import BlogPage from './Components/Pages/BlogPage.jsx'
import BlogSinglePage from './Components/Pages/BlogSinglePage.jsx'
import ContactPage from './Components/Pages/ContactPage.jsx'
import ServiceTemplate from './Components/ServicePages/ServiceTemplate';
import { serviceData } from './data/serviceData';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/work' element={<WorkPage/>} />
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog-single' element={<BlogSinglePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route 
        path='/services/:serviceId' 
        element={<ServiceTemplate serviceData={serviceData} />}
        errorElement={<div>Service not found</div>} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
