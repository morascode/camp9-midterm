import { useQuery } from '@tanstack/react-query';
import type {
  MovieDbResponse,
  Movie,
  MovieDetailDbResponse,
} from '../utilities/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

async function getBookmarkedMovies() {
  // if user is logged in as guest
  if (Cookies.get('guest')) {
    const guestBookmarks = localStorage.getItem('bookmarks');
    if (guestBookmarks) {
      return JSON.parse(guestBookmarks) as MovieDetailDbResponse[];
    }
  }
  // if user is logged in with an account
  else {
    const response = await axios.get<Movie[]>(
      `${import.meta.env.VITE_SERVER_URL}/api/1.0/user/bookmarks/`,
      { withCredentials: true }
    );
    console.log(response.data);
    return response.data;
  }
}
async function patchBookmark(movieId: number, createBookmark: boolean) {
  const response = await axios.patch(
    `${import.meta.env.VITE_SERVER_URL}/api/1.0/user/bookmarks/${movieId}/`,
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
  function checkIsBookmarked(): Movie | MovieDetailDbResponse | undefined {
    if (query.data) {
      return (query.data as any[]).find((movie: { tmdbId: number }) => {
        return movie.tmdbId === id;
      });
    }
  }
  async function toggleBookmark(movie: MovieDetailDbResponse) {
    // if user is logged in as guest
    if (Cookies.get('guest') && query.data) {
      const newBookmarks = [...query.data];
      const bookmarkedMovie = checkIsBookmarked();
      if (!bookmarkedMovie) newBookmarks.push(movie);
      else {
        newBookmarks.splice(newBookmarks.indexOf(bookmarkedMovie), 1);
      }
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    }
    // if user is logged in with an account
    else if (id) {
      await patchBookmark(id, !checkIsBookmarked());
    }
    query.refetch();
  }
  return { query, isBookmarked, toggleBookmark };
}
