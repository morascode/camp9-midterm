import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function useMovieHook() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=7bdc02c5d27a184488dd56b87a8cad76&language=en-US'
        );
        console.log(data);
        setData(() => data);
      } catch (err) {
        const error = err as AxiosError;
        setIsError(error.message);
      }
    })();
    setIsLoading(false);
  }, []);
  console.log(data);
  return { data, isLoading, isError };
}
