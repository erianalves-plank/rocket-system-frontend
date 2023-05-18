import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Root } from './routes/root.tsx';
import { Rocket } from './routes/rocket.tsx';
import { ThemeContext } from './ThemeContext.tsx';
import { theme } from './Theme.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "rocket",
    element: <Rocket />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext.Provider value={theme}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
    {/*  <App /> */}

  </React.StrictMode>
)
