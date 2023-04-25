import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useEmojieLibrary } from '../../../../Context/GenreContext';

export default function useMovieHook() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=b83392e48747a4845ad80c2011eaa33b&with_genres=28,878'
        );

        setData(() => data);
      } catch (err) {
        const error = err as AxiosError;
        setIsError(error.message);
      }
    })();
    setIsLoading(false);
  }, []);

  return { data, isLoading, isError };
}
