import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root.jsx';
import Horoscope from './components/Horoscope/Horoscope.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/horoscope",
        element: <Horoscope />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
