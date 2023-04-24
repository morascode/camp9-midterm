export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export type MovieDbResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailDbResponse = {
  title: string;
  backdrop_path: string;
  release_date: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime: number;
  vote_average: number;
  overview: string;
  imdb_id: string;
  credits: {
    crew: Array<{
      name: string;
      job: 'Screenplay' | 'Director';
    }>;
  };
};

// types for the credits page
export type TMBDImageResponse = {
  profiles: { file_path: string }[];
};

export type CreditsImage = {
  id: number;
  imgUrl: string;
};

export type TMDBCast = {
  id: number;
  name: string;
  character: string;
};

export type TMDBCrew = { id: number; name: string; job: string };

export type MovieDbCreditsResponse = {
  id: number;
  cast: TMDBCast[];
  crew: TMDBCrew[];
};
