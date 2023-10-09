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
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoutes from './Routes/PrivateRoutes';
import AuthProviders from './Providers/AuthProviders';
import ErrorPage from './Pages/ErrorPage/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element : <PrivateRoutes><Services></Services></PrivateRoutes>,
        loader: () => fetch('/services.json')
      },
      {
        path : "/premium",
        element : <PrivateRoutes><Premium></Premium></PrivateRoutes>,
      },
      {
        path : "/profile",
        element : <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
      {
        path: '/login',
        element: <Login></Login>
    }, 
    {
        path: '/register',
        element: <Register></Register>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
