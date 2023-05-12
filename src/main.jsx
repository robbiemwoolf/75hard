import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './errorPage.jsx'
import './index.css'
import './main.css'
import Rules from './Rules.jsx'
import Body from './Body.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: [<Body key='body' />, <Footer key='footer' />],
        errorElement: <ErrorPage />,
    },
    {
        path: "/rules",
        element: [<Header key='header' />, <Rules key='rules' />],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
