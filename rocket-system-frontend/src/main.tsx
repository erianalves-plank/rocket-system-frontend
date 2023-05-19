import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { Crew } from './routes/crew.tsx';
import { Crewman } from './routes/crewman.tsx';
import { Launch } from './routes/launch.tsx';
import { Rocket } from './routes/rocket.tsx';
import { Root } from './routes/root.tsx';
import { theme } from './Theme.tsx';
import { ThemeContext } from './ThemeContext.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "rocket",
    element: <Rocket />,
  },
  {
    path: "launch",
    element: <Launch />,
  },
  {
    path: "crew",
    element: <Crew />,
  },
  {
    path: "crewman",
    element: <Crewman />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext.Provider value={theme}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  </React.StrictMode>
)
