import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MovieDbCreditsResponse } from '../utilities/types';

async function getCredits(id: number) {
  const response = await axios.get<MovieDbCreditsResponse>(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US`
  );
  return response.data;
}

export function useGetCredits(id: number) {
  const query = useQuery({
    queryKey: [id],
    queryFn: () => getCredits(id),
  });
  return query;
}
