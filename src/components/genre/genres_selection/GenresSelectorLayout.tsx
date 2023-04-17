import clsx from 'clsx';
import React, { useState } from 'react';

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
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="grid grid-cols-4 gap-8">
      {EmojiLibary.map(param => (
        <div
          className="flex flex-col items-center gap-1"
          onClick={() => {
            props.setCounter(props.counter + 1);
            setIsSelected(!isSelected);
          }}
          key={param.id}
        >
          <div
            className={clsx(
              'rounded-xl w-14 h-14 text-3xl flex flex-col justify-center items-center',
              isSelected ? 'bg-white/40' : 'bg-[#363740]'
            )}
          >
            <p>{param.Emoji}</p>
          </div>
          <h3 className="text-xs font-bold text-white/40">{param.Genre}</h3>
        </div>
      ))}
    </div>
  );
}

export default GenresSelectorLayout;
