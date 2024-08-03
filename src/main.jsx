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
import DespreMine from './components/DespreMine/DespreMine.jsx';
import HartaNatala from './components/HartaNatala/HartaNatala.jsx';

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
        path: "/harta-natala",
        element: <HartaNatala />,
      },
      {
        path: "/despre-mine",
        element: <DespreMine />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
