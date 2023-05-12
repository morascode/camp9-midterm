import { Link } from 'react-router-dom';
import { useGetMovies, useGetNowPlayingMovies } from '../hooks/useMovies';
import { useGenreContext } from '../contexts/GenreContext';
import { useEffect } from 'react';

type Movie = {
  id: number;
  tmdbId: number;
  title: string;
  releaseDate: Date;
  backdropPath: string;
  runtime: number;
  voteAverage: number;
  overview: string;
};

function UpcomingMovies() {
  const { genreIDs } = useGenreContext();
  const genreIDsString = genreIDs.join('-');
  console.log(genreIDsString);
  const { data, refetch } = useGetNowPlayingMovies(genreIDsString);
  console.log(data);
  if (!data) return <span>Loading...</span>;
  console.log(data);
  console.log(genreIDs);
  return (
    <>
      <h2 className="typography-title dark:text-dark">Upcoming Movies</h2>
      <section className="flex gap-5 overflow-y-hidden snap-mandatory snap-x -mx-5 py-3">
        {data.slice(0, 20).map(movie => (
          <div className="w-32 shrink-0 snap-center" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className="rounded-md"
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default UpcomingMovies;
