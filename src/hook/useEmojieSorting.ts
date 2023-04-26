import { useState } from 'react';
import { useEmojieLibrary } from '../Context/GenreContext';
import { MovieDbResponse } from '../utilities/types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function getEmojieMovies(genreIDs: Number[]) {
  return axios
    .get<MovieDbResponse>(
      `https://api.themoviedb.org/3/discover/movie?api_key=b83392e48747a4845ad80c2011eaa33b&with_genres=${genreIDs}`
    )
    .then(res => res.data);
}

function getNOTemojiesMovies() {
  return axios
    .get<MovieDbResponse>(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=b83392e48747a4845ad80c2011eaa33b'
    )
    .then(res => res.data);
}

export function useEmojieMovies() {
  const { filteredEmojieLibrary } = useEmojieLibrary();
  const genreIDs = filteredEmojieLibrary
    .filter(genreid => {
      if (genreid.isSelected === true) return genreid.GenreId;
    })
    .map(genreid => genreid.GenreId);

  if (genreIDs.length > 0) {
    const query = useQuery(['emojieMovies', genreIDs], () =>
      getEmojieMovies(genreIDs)
    );
    return {
      ...query,
      movies: query.data?.results,
    };
  }
  const query = useQuery(['notEmojieMovies'], getNOTemojiesMovies);
  return {
    ...query,
    movies: query.data?.results,
  };
}
