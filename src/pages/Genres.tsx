import GenresSelectionPage from '../components/genre/genres_selection/GenresSelection';
import HeaderPage from '../components/HeaderPage';

function Genres() {
  return (
    <div className="mx-5 mt-8 mb-6">
      <MovieDetailHeader>Genres</MovieDetailHeader>
      <GenresSelectionPage />
    </div>
  );
}

export default Genres;
