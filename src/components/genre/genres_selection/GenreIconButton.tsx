import clsx from 'clsx';
import React, { useState } from 'react';

interface Emoji {
  emoji: string;
  genre: string;
  id: number;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

function GenreIconButton(props: Emoji) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className="flex flex-col items-center gap-1"
      key={props.id}
      onClick={() => {
        if (isSelected) {
          props.setCounter(props.counter - 1);
          setIsSelected(!isSelected);
        } else props.setCounter(props.counter + 1);
        setIsSelected(!isSelected);
      }}
    >
      <div
        className={clsx(
          'rounded-xl w-14 h-14 text-3xl flex flex-col justify-center items-center',
          isSelected ? 'bg-white/40' : 'bg-[#363740]'
        )}
      >
        <span>{props.emoji}</span>
      </div>
      <h3 className="text-xs font-bold text-white/40">{props.genre}</h3>
    </div>
  );
}

export default GenreIconButton;
