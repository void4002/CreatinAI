import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Activities from './pages/Activities';
import Events from './pages/Events';
import Winners from './pages/Winners';
import Intake from './pages/Intake';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

const router=createHashRouter([
        {
            path: "/",
            element: <App/>,
        },
        {
            path: "services",
            element: <Activities/>,
        },
        {
            path: "events",
            element: <Events/>,
        },
        {
            path: "winner",
            element: <Winners/>,
        },
        {
            path: "intake",
            element: <Intake/>,
        },
])
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

