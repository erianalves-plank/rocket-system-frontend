import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css';
import { Crew } from './routes/crew.tsx';
import { Crewman } from './routes/crewman.tsx';
import { Launch } from './routes/launch.tsx';
import { Rocket } from './routes/rocket.tsx';
import { Root } from './routes/root.tsx';
import { theme } from './theme/Theme.tsx';
import { ThemeContext } from './theme/ThemeContext.tsx';
import ErrorPage from './error-page.tsx';

import './i18n/i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'rocket',
    element: <Rocket />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'launch',
    element: <Launch />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'crew',
    element: <Crew />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'crewman',
    element: <Crewman />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext.Provider value={theme}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  </React.StrictMode>
);
