import { Link } from 'react-router-dom';
import { useGetNowPlayingMovies } from '../hooks/useMovies';
import { useGenreContext } from '../contexts/GenreContext';
import clsx from 'clsx';

function UpcomingMovies() {
  const { genreIDs } = useGenreContext();
  const genreIDsString = genreIDs.join('-');

  const { data } = useGetNowPlayingMovies(genreIDsString);

  if (!data) return <span>Loading...</span>;

  return (
    <>
      <h2 className="typography-title dark:text-dark">Upcoming Movies</h2>
      <section className="flex gap-5 overflow-y-hidden snap-mandatory snap-x -mx-5 py-3">
        {data.slice(0, 20).map(movie => (
          <div className="w-32 shrink-0 snap-center" key={movie.tmdbId}>
            <Link to={`/movies/${movie.tmdbId}`}>
              <img
                className={clsx(
                  'rounded-md',
                  movie.posterPath ? 'visible' : 'hidden'
                )}
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
