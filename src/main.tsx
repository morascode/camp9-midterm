import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import WelcomeHeader from './components/WelcomeHeader';
import NavigationLayout from './components/NavigationLayout';
import MovieDetails from './pages/MovieDetails';
<<<<<<< HEAD

=======
import Home from './pages/Home';
import Genres from './pages/Genres';
import Credits from './pages/Credits';
>>>>>>> fda9c3c7745318e52425d01049b418cc2015ea34
import SearchBar from './components/Searchbar';
import LogInPage from './pages/LogInPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogInPage />, // insert your page here
  },
  {
    path: '/genres',
    element: <Genres/>, // insert your page here
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
  },
  {
    path: '/credits/:id',
    element: <Credits />,
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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
