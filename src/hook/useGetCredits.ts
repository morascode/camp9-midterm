import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MovieDbCreditsResponse } from '../utilities/types';

async function getCredits(id: number | string) {
  const response = await axios.get<MovieDbCreditsResponse>(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b83392e48747a4845ad80c2011eaa33b&language=en-US`
  );
  return response.data;
}

export function useGetCredits(id: number | string) {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [id],
    queryFn: () => getCredits(id),
  });

  return { data, isLoading, error, isError };
}
