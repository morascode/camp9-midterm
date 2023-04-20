import clsx from 'clsx';
import React, { useState } from 'react';
import { useEmojieLibrary } from '../../../Context/GenreContext';
import GenreIconButton from './GenreIconButton';

interface Props {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

function GenresSelectorLayout(props: Props) {
  const { emojieLibrary } = useEmojieLibrary();

  return (
    <div className="grid grid-cols-4 gap-8">
      {emojieLibrary.map(param => (
        <GenreIconButton
          emoji={param.Emoji}
          genre={param.Genre}
          id={param.id}
          isSelected={param.isSelected}
          counter={props.counter}
          setCounter={props.setCounter}
          key={param.id}
        ></GenreIconButton>
      ))}
    </div>
  );
}

export default GenresSelectorLayout;
