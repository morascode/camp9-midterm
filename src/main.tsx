import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import NavigationLayout from './components/NavigationLayout';
import GenresSelectionPage from './components/genre/genres_selection/GenresSelection';
import GenreFavorites from './components/genre/GenreFavorites';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <h1>Login</h1>,
  },
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <h1>Hai Home</h1>,
      },
      {
        path: '/movies',
        element: <h1>hellou movies</h1>,
      },
    ],
  },

  {
    path: '/GenreFavorites',
    element: <GenreFavorites />,
  },
  {
    path: '/genres',
    element: <GenresSelectionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
