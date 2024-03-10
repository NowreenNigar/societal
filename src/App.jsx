import React, { Component } from 'react';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Signin from './components/Auth/signIn';
import Signup from './components/Auth/signup';
import AboutUs from './components/Other/About/AboutUs';
import Auth from './components/Auth/Auth';
import Contact from './components/Other/Contact/Contact';
import CreateOrphanage from './components/Other/Createorphanages/CreateOrphanage';
import LandingPage from './components/Other/Landing/LandingPage';
import Sidebar from './components/Other/Sidebar/Sidebar';
import Orphanage from './components/Other/orphanage/Orphanges'
import Admin from './components/Other/Admin/admin'


function App() {
  const router = createBrowserRouter([
    {path: '/', element:<><Auth/></>},
    {path: '/landingpage', element:<><LandingPage/></>},
    {path: '/contact', element:<><Contact/></>}, 
    {path: '/about', element:<><AboutUs/></>},
    {path: '/createorphanage', element:<><CreateOrphanage/></>},
    {path: '/orphanage', element:<><Orphanage/></>},
    {path: '/admin', element:<><Admin/></>},
  ])
  
  return (
    <>
    
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App