import PageHeader from '../components/CreditsPageHeader';
import GenresSelectionPage from '../components/genre/genres_selection/GenresSelection';
import MovieDetailHeader from '../components/MovieDetailHeader';

function Genres() {
  return (
    <div className="mx-5 mt-8 mb-6">
      <MovieDetailHeader goBackTo="/">Genres</MovieDetailHeader>
      <GenresSelectionPage />
    </div>
  );
}

export default Genres;
