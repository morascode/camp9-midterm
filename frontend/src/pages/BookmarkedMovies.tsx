import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/useBookmarks';
import { Movie } from '../utilities/types';
export default function BookmarkedMovies() {
  const { query } = useBookmarks();
  const { data, isError, isLoading } = query;
  if (isError) {
    return (
      <div className="px-5 py-8">
        <h1 className="typography-primary text-white">
          Couldn't find the bookmarks, sorry!
        </h1>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="px-5 py-8">
        <h1 className="typography-primary text-white">Loading...</h1>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-center px-5 py-8">
        <h1 className="text-2xl text-white-dimmed">
          You have no bookmarked movies.
        </h1>
      </div>
    );
  } else
    return (
      <div className="grid grid-rows-2 grid-cols-2 gap-5 px-5 py-8">
        {data.map((movie: Movie, index: number) => {
          let image = movie.posterPath;
          return (
            <Link to={`/movies/${movie.tmdbId}`} key={index}>
              <div className="h-auto">
                <img
                  alt="movie poster"
                  src={`https://image.tmdb.org/t/p/original/${image}`}
                ></img>
              </div>
            </Link>
          );
        })}
      </div>
    );
}
