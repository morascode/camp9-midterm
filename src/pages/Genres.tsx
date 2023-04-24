import PageHeader from '../components/CreditsPageHeader';
import GenresSelectionPage from '../components/genre/genres_selection/GenresSelection';

function Genres() {
  return (
    <div className="mx-5 mt-8 mb-6">
      <PageHeader children={'Genres'} />
      <GenresSelectionPage />
    </div>
  );
}

export default Genres;
