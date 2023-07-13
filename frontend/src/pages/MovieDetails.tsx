import Button from '../components/Button';
import { Link, useParams } from 'react-router-dom';
import { minutesToHoursAndMinutes } from '../utilities/minutesToHoursAndMinutes';
import { firstOneOrTwoGenres } from '../utilities/firstOneOrTwoGenres';
import { returnNameOfCrewMember } from '../utilities/returnNameOfCrewMember';
import { useGetMovieDetails } from '../hooks/useMovies';
import HeaderPage from '../components/HeaderPage';
import { useBookmarks } from '../hooks/useBookmarks';

function MovieDetails() {
  const movieId = parseInt(useParams().id!);
  const { isBookmarked, toggleBookmark } = useBookmarks(movieId);
  const { data, isLoading, isError } = useGetMovieDetails(movieId);
  console.log(data);
  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log(data);
  if (isError === true) {
    throw new Error('no data found');
  }
  return (
    <article className="pb-7 h-screen w-screen">
      <HeaderPage
        isLiked={isBookmarked}
        children="Movie Detail"
        hasHeartButton={true}
        onHeartButtonClick={toggleBookmark}
      />
      <div className="px-5 pb-7 flex flex-col">
        <img
          className="rounded-md mt-5"
          src={`https://image.tmdb.org/t/p/w500${data.backdropPath}`}
          alt={data.title}
        />
        <h2 className="typography-title mt-5">{data.title}</h2>
        <div className="mt-3 flex justify-between">
          <div className="flex gap-3">
            <p className="typography-description text-white">
              {data.releaseDate.split('-')[0]}
            </p>
            <p className="typography-description">
              {firstOneOrTwoGenres(data)}
            </p>
            <p className="typography-description">
              {minutesToHoursAndMinutes(data)}
            </p>
          </div>
          <div className="flex gap-1">
            <span className="typography-description text-green">
              {data && Math.round(data?.voteAverage * 10) + '%'}
            </span>
            <span className="typography-description">Score</span>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center mt-2 w-full gap-10">
          <div className="grid grid-cols-2 h-full content-around">
            <div className="typography-secondary font-bold">Director:</div>
            <div className="typography-secondary font-bold whitespace-nowrap text-white">
              {returnNameOfCrewMember('Director', data)}
            </div>
            <div className="typography-description">Writer:</div>
            <div className="typography-description whitespace-nowrap text-white">
              {returnNameOfCrewMember('Screenplay', data)}
            </div>
          </div>
          <Link className="flex-1" to={`/credits/${movieId}`}>
            <Button variant="secondary">Cast & Crew</Button>
          </Link>
        </div>
        <hr className="mt-3"></hr>
        <h2 className="typography-title mt-3">Synopsis</h2>
        <p className="typography-body mt-3">
          {data?.overview.slice(0, 150) + '...'}
        </p>
        <a
          className="typography-body text-orange-500 underline mt-2"
          href={`https://www.themoviedb.org/movie/${data?.tmdbId}`}
          target="_blank"
        >
          Read more
        </a>
      </div>
      <div className="mt-auto px-8">
        <Link to={`/dates/${movieId}`}>
          <Button>Get Reservation</Button>
        </Link>
      </div>
    </article>
  );
}

export default MovieDetails;
