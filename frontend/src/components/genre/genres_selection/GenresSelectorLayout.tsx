import clsx from 'clsx';
import React, { useState } from 'react';

import GenreIconButton from './GenreIconButton';
import { useGenreContext } from '../../../contexts/GenreContext';

function GenresSelectorLayout() {
  const { genreLibrary } = useGenreContext();

  return (
    <div className="grid text-center grid-cols-4 gap-8">
      {genreLibrary.map(param => (
        <GenreIconButton
          emoji={param.Emoji}
          genre={param.Genre}
          id={param.id}
          isSelected={param.isSelected}
          key={param.id}
        ></GenreIconButton>
      ))}
    </div>
  );
}

export default GenresSelectorLayout;
