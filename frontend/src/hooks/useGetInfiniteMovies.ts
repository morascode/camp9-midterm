import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MovieDbResponse } from '../utilities/types';
import { EmojieLibraryEntry, useGenreContext } from '../contexts/GenreContext';

// this function just returns an array of IDs of currently selected genres from the GenreContext
function getSelectedGenres(filteredGenreLibrary: EmojieLibraryEntry[]) {
  const selectedGenresIDs = filteredGenreLibrary
    .filter(genreid => {
      if (genreid.isSelected === true) return genreid.GenreId;
    })
    .map(genreid => genreid.GenreId);
  return selectedGenresIDs;
}

// this function acts as the query function for useGetInfiniteMovies hook
// it fetches 20 movies from the given page with selected gernes
async function getInfiniteMovies(
  pageNumber: number,
  selectedGenresParameter: string
) {
  const response = await axios.get<MovieDbResponse>(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&page=${pageNumber}${selectedGenresParameter}`
  );
  return response.data;
}

// this hook gets 20 movies per fetch
// returns the query object including:
// data.pages - an array of all pages fetched, 20 movies per page (up to 500 pages)
// fetchNextPage - function that fetches the next 20 movies, saves them in data.pages (note: do not pass any arguments to this function!)
// hasNextPage - boolean determining if the next page can be feched
export function useGetInfiniteMovies() {
  const { filteredGenreLibrary } = useGenreContext();
  const selectedGenres = getSelectedGenres(filteredGenreLibrary);
  const infiniteQuery = useInfiniteQuery({
    queryKey: ['infiniteMovies', { genres: selectedGenres }],
    queryFn: ({ pageParam = 1 }) =>
      getInfiniteMovies(pageParam, `&with_genres=${selectedGenres.join('|')}`),
    getNextPageParam: lastPage =>
      lastPage.page >= lastPage.total_pages || lastPage.page >= 500
        ? undefined
        : lastPage.page + 1,
  });
  return infiniteQuery;
}
