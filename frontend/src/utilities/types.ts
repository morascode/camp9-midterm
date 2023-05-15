export type Movie_DB = {
  id: number;
  tmdbId: number;
  title: string;
  releaseDate: Date;
  backdropPath: string;
  posterPath: string;
  runtime: number;
  voteAverage: number;
  overview: string;
};

export type Movie = {
  tmdbId: number;
  title: string;
  posterPath: string;
  overview: string;
};
export type MovieDbResponse = {
  [x: string]: any;
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;
};

export type TicketProps = {
  movieTitle: string;
  movieTime: string;
  movieDate: string;
};

export type MovieDetailDbResponse = {
  map(arg0: (movie: any, index: any) => void): import('react').ReactNode;
  title: string;
  backdropPath: string;
  releaseDate: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime: number;
  voteAverage: number;
  overview: string;
  id: number;
  imdbId: string;
  credits: {
    cast: { set: TMDBCast[] };
    crew: { set: TMDBCrew[] };
  };
};

// types for the credits page
export type TMDBCast = {
  id: number;
  name: string;
  character: string;
  credit_id: string;
};

export type TMDBCrew = {
  id: number;
  name: string;
  job: string;
  credit_id: string;
};

export type MovieDbCreditsResponse = {
  id: number;
  cast: TMDBCast[];
  crew: TMDBCrew[];
};

export type PersonImagesRequest = {
  id: number;
  profiles: { file_path: string }[];
};

export type SignupUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type BookingResponse = { token: string };

export type Booking = {
  bookingId: string;
  user: string;
  userId: string;
  movieId: string;
  dateAndTime: string;
  seats: string[];
  price: string;
};

export interface GenreLibraryEntry {
  Genre: string;
  Emojie: string;
  id: number;
  GenreId: number;
  isSelected: boolean;
}
