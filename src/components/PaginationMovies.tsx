import axios from 'axios';
import React, { useEffect } from 'react';
import { emojieLibrary } from '../Context/EmojieLibrary';
import { useEmojieLibrary } from '../Context/GenreContext';
import { useEmojieMovies } from '../hook/useEmojieSorting';

interface PaginationMovies {
  state: number;
}

export default function PaginationMovies({ state }: PaginationMovies) {
  const { filteredEmojieLibrary } = useEmojieLibrary();
  const genreIds = filteredEmojieLibrary
    .filter(genreid => {
      if (genreid.isSelected === true) return genreid.GenreId;
    })
    .map(genreid => genreid.GenreId);

  const { isError, isLoading, movies } = useEmojieMovies(genreIds);

  if (isError) {
    return <h1>"Couldn't find the movies, sorry"</h1>;
  }
  if (isLoading) {
    return <h1>'wait a sec...'</h1>;
  }
  const allMovies = movies;
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
