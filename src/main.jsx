import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
// import ServiceCard from './Pages/ServiceCard';
import Services from './Pages/ServiceDetails/Services';
import Premium from './Pages/Premium';
import Profile from './Pages/Profile';
import Contact from './Components/Contact';
import ServicesAll from './Pages/ServicesAll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path : "/services",
        element : <ServicesAll></ServicesAll>,
        loader: () => fetch('/services.json')
      },
      {
        path : "/contact",
        element : <Contact></Contact>,
      },
      {
        path : "/services/:id",
        element : <Services></Services>,
        loader: () => fetch('/services.json')
      },
      {
        path : "/premium",
        element : <Premium></Premium>,
      },
      {
        path : "/profile",
        element : <Profile></Profile>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
