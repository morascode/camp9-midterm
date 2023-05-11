import { useQuery } from '@tanstack/react-query';
import type { Movie } from '../utilities/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

async function getBookmarkedMovies() {
  const response = await axios.get<Movie[]>(
    `http://localhost:8000/api/1.0/user/bookmarks/`,
    { withCredentials: true }
  );
  return response.data;
}
async function deleteBookmark(movieId: number) {
  const response = await axios.delete(
    `http://localhost:8000/api/1.0/user/bookmarks/${movieId}/`,
    { withCredentials: true }
  );
  return response.data;
}
async function createBookmark(movieId: number) {
  const response = await axios.post(
    `http://localhost:8000/api/1.0/user/bookmarks/${movieId}/`,
    undefined,
    { withCredentials: true }
  );
  return response.data;
}
// the hook
export function useBookmarks(id?: number) {
  const query = useQuery({
    queryKey: ['movies', 'bookmarked'],
    queryFn: getBookmarkedMovies,
  });
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (id) {
      if (checkIsBookmarked(id)) {
        !isBookmarked && setIsBookmarked(true);
      } else {
        isBookmarked && setIsBookmarked(false);
      }
    }
  }, [query]);
  function checkIsBookmarked(movieId: number) {
    return Boolean(
      query.data?.find(movie => {
        return movie.tmdbId === movieId;
      })
    );
  }
  async function toggleBookmark(movieId: number) {
    if (checkIsBookmarked(movieId)) {
      await deleteBookmark(movieId);
    } else {
      await createBookmark(movieId);
    }
    query.refetch();
  }
  return { query, isBookmarked, toggleBookmark };
}
