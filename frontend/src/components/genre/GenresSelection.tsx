import { Link } from 'react-router-dom';
import GenresSelectorLayout from './GenresSelectorLayout';
import { useGenreContext } from '../../contexts/GenreContext';

function GenresSelection() {
  const { genreCounter } = useGenreContext();
  return (
    <div className="flex flex-col px-5 pt-6 pb-6 gap-10 bg-[#1C1C27] w-full dark:bg-white">
      <GenresSelectorLayout></GenresSelectorLayout>
      <div className="flex flex-row gap-1">
        <p className="text-white dark:text-dark-light">{genreCounter}</p>
        <p className="text-white/40 dark:text-dark-light">Genres selected</p>
      </div>
      <Link to={'/'} className="w-full rounded-lg bg-yellow text-center py-4">
        Confirm selected Genres
      </Link>
    </div>
  );
}

export default GenresSelection;
