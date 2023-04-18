import clsx from 'clsx';
import React, { useState } from 'react';
import GenreIconButton from './GenreIconButton';

export const EmojiLibary = [
  {
    Genre: 'Action',
    Emoji: '🧨',
    id: 1,
  },
  {
    Genre: 'Adventure',
    Emoji: '💎',
    id: 2,
  },
  {
    Genre: 'Animation',
    Emoji: '🦁',
    id: 3,
  },
  {
    Genre: 'Comedy',
    Emoji: '🤣',
    id: 4,
  },
  {
    Genre: 'Crime',
    Emoji: '🚔',
    id: 5,
  },
  {
    Genre: 'Documentary',
    Emoji: '🎥',
    id: 6,
  },
  {
    Genre: 'Drama',
    Emoji: '🎭',
    id: 7,
  },
  {
    Genre: 'Family',
    Emoji: '👨‍👩‍👧',
    id: 8,
  },
  {
    Genre: 'Fantasy',
    Emoji: '🦄',
    id: 9,
  },
  {
    Genre: 'History',
    Emoji: '⏳',
    id: 10,
  },
  {
    Genre: 'Horror',
    Emoji: '🔪',
    id: 11,
  },
  {
    Genre: 'Music',
    Emoji: '🎧',
    id: 12,
  },
  {
    Genre: 'Mystery',
    Emoji: '🔎',
    id: 13,
  },
  {
    Genre: 'Romance',
    Emoji: '😍',
    id: 14,
  },
  {
    Genre: 'Science Fiction',
    Emoji: '👽',
    id: 15,
  },
  {
    Genre: 'Thriller',
    Emoji: '😱',
    id: 16,
  },
];

interface Props {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

function GenresSelectorLayout(props: Props) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {EmojiLibary.map(param => (
        <GenreIconButton
          emoji={param.Emoji}
          genre={param.Genre}
          id={param.id}
          counter={props.counter}
          setCounter={props.setCounter}
        ></GenreIconButton>
      ))}
    </div>
  );
}

export default GenresSelectorLayout;
