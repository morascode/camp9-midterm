import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

function useQuery<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null);

  useEffect(() => {
    async () => {
      try {
        const { data } = await axios.get<T>(url);
        setData(() => data);
      } catch (err) {
        const error = err as AxiosError;
        setIsError(error.message);
      }
    };
  }),
    [];
  return { data, isLoading, isError };
}

export default function SearchBarRequest() {
  const { data, isLoading, isError } = useQuery<Movie[]>(
    'https://api.themoviedb.org/3/movie/popular?api_key=7bdc02c5d27a184488dd56b87a8cad76'
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return <p>No Blogpost found</p>;

  return (
    <div>
      {data.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
