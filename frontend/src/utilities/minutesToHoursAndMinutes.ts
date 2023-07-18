import { MovieDetails } from './types';

export function minutesToHoursAndMinutes(
  data: MovieDetails | null
): string | undefined {
  if (data && typeof data.runtime === 'number') {
    if (data.runtime < 60) {
      return data.runtime + 'm';
    } else {
      const hours = Math.trunc(data.runtime / 60);
      const minutes = data.runtime % 60;
      return hours + 'h ' + minutes + 'm';
    }
  }
}
