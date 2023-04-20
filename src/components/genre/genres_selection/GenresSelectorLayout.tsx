import clsx from 'clsx';
import React, { useState } from 'react';
import { useEmojieLibrary } from '../../../Context/GenreContext';
import GenreIconButton from './GenreIconButton';

interface Props {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

function GenresSelectorLayout(props: Props) {
  const { EmojieLibrary } = useEmojieLibrary();
  return (
    <div className="grid grid-cols-4 gap-8">
      {EmojieLibrary.map(param => (
        <GenreIconButton
          emoji={param.Emoji}
          genre={param.Genre}
          id={param.id}
          counter={props.counter}
          setCounter={props.setCounter}
          key={param.id}
        ></GenreIconButton>
      ))}
    </div>
  );
}

export default GenresSelectorLayout;
