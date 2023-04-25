import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

export default function useGetMovies<T>(url: string) {
  useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      try {
        const { data } = await axios.get<T>(url);
        return data;
      } catch (err) {
        const error = err as AxiosError;
        return error.message;
      }
    },
  });
}
