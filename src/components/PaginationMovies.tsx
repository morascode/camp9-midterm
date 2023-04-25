import axios from 'axios';
import React, { useEffect } from 'react';
import { emojieLibrary } from '../Context/EmojieLibrary';
import { useEmojieLibrary } from '../Context/GenreContext';
import useQuery from '../hook/useQuery';
import type { MovieDbResponse } from '../utilities/types';
import type { Movie } from '../utilities/types';
import GenreId from './genre/genre_filter/GenreId';
import useMovieHook from './genre/genre_filter/genre_hook/GenreHook';

interface PaginationMovies {
  state: number;
}

export default function PaginationMovies({ state }: PaginationMovies) {
  const { filteredEmojieLibrary } = useEmojieLibrary();

  const genreIds = filteredEmojieLibrary.map(genreid => {
    if (genreid.isSelected === true) {
      return genreid.GenreId;
    }
    if (genreid.isSelected === false) {
      return genreid.GenreId;
    }
  });

  console.log(genreIds);

  const { data: MovieData } = useMovieHook();
  console.log(MovieData);
  const { isError, isLoading, data } = useQuery<MovieDbResponse>(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=b83392e48747a4845ad80c2011eaa33b`
  );

  const allMovies = data?.results;
  if (isError) {
    return <h1>"Couldn't find the movies, sorry"</h1>;
  }
  if (isLoading) {
    return <h1>'wait a sec...'</h1>;
  }
  let fourMovies = allMovies;
  switch (state) {
    case 1:
      fourMovies = allMovies?.slice(0, 4);
      break;
    case 2:
      fourMovies = allMovies?.slice(4, 8);
      break;
    case 3:
      fourMovies = allMovies?.slice(8, 12);
      break;
    case 4:
      fourMovies = allMovies?.slice(12, 16);
      break;
    case 5:
      fourMovies = allMovies?.slice(16, 20);
      break;
  }

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-between w-full h-[full]">
      {fourMovies?.map((movie, index) => {
        let image = movie.poster_path;
        return (
          <div className={'h-auto'} key={index}>
            <img
              className={' h-64'}
              src={`https://image.tmdb.org/t/p/original/${image}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
