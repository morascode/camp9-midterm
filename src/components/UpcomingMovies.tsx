import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

type UpcomingMovies = React.HTMLAttributes<HTMLElement>;
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}
interface RouteParams {
  id: string;
}

export default function UpcomingMovies({ children }: UpcomingMovies) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=b83392e48747a4845ad80c2011eaa33b`
      )
      .then(response => {
        // console.log('API Response', response);
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className="typography-title">Upcoming Movies</h2>
      <section className="flex gap-5 overflow-y-hidden snap-mandatory snap-x -mx-5 py-3">
        {movies.map((movie: Movie) => (
          <div className="w-32 shrink-0 snap-center" key={movie.id}>
            <Link to={`/movies/${movie.id} `}  >
              <img
                className='rounded-md'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            
              />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
