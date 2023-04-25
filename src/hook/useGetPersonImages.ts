import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PersonImagesRequest } from '../utilities/types';

async function getPersonImages(id: number) {
  const response = await axios.get<PersonImagesRequest>(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=b83392e48747a4845ad80c2011eaa33b`
  );
  return response.data;
}

export function useGetPersonImages(id: number) {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['person', id],
    queryFn: () => getPersonImages(id),
  });

  return { data, isLoading, error, isError };
}
