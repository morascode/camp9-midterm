import { useQuery } from '@tanstack/react-query';
import type { MovieLocalDB } from '../utilities/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

async function getBookmarkedMovies() {
  const response = await axios.get<MovieLocalDB[]>(
    `${import.meta.env.VITE_BACKEND_URL}/user/bookmarks/`,
    { withCredentials: true }
  );
  return response.data;
}
async function patchBookmark(movieId: number, createBookmark: boolean) {
  const response = await axios.patch(
    `${import.meta.env.VITE_BACKEND_URL}/user/bookmarks/${movieId}/`,
    { createBookmark: createBookmark },
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
    if (id && query.data) {
      if (checkIsBookmarked()) {
        !isBookmarked && setIsBookmarked(true);
      } else {
        isBookmarked && setIsBookmarked(false);
      }
    }
  }, [query]);
  function checkIsBookmarked() {
    return Boolean(
      query.data?.find(movie => {
        return movie.tmdbId === id;
      })
    );
  }
  async function toggleBookmark() {
    if (id) {
      await patchBookmark(id, !checkIsBookmarked());
      query.refetch();
    }
  }
  return { query, isBookmarked, toggleBookmark };
}
