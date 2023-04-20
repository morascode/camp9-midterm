import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import NavigationLayout from './components/NavigationLayout';
import MovieDetails from './pages/MovieDetails';

import SearchBar from './components/Searchbar';
import LogInPage from './pages/LogInPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <h1>HOME</h1>, // insert your page here
      },
      {
        path: '/movies',
        element: <h1>MOVIES</h1>, // insert your page here
      },
      {
        path: '/bookmarks',
        element: <h1>BOOKMARKS</h1>, // insert your page here
      },
      {
        path: '/account',
        element: <h1>ACCOUNT</h1>, // insert your page here
      },
    ],
  },
  {
    path: '/login',
    element: <LogInPage />, // insert your page here
  },
  {
    path: '/genres',
    element: <h1>GENRES</h1>, // insert your page here
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
  },
  {
    path: '/cast/:id',
    element: <h1>CAST AND CREW</h1>, // insert your page here
  },
  {
    path: '/dates',
    element: <h1>SELECT DATE AND TIME</h1>, // insert your page here
  },
  {
    path: '/seats',
    element: <h1>SELECT SEATS</h1>, // insert your page here
  },
  {
    path: '/success',
    element: <h1>BOOKING SUCCESSFULL</h1>, // insert your page here
  },
  {
    path: '/searchbar',
    element: <SearchBar />, // insert your page here
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
