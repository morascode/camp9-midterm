import clsx from 'clsx';
import React, { useState } from 'react';
import { useEmojieLibrary } from '../../Context/GenreContext';

export interface Props {
  emojie: string;
  genre: string;
  id: number;
  isSelected: boolean;
}

function Genreonclick(props: Props) {
  const { toggleEmojie } = useEmojieLibrary();
  return (
    <div
      key={props.id}
      onClick={() => {
        if (props.isSelected === false) {
          toggleEmojie(props.id);
          props.setCounter(props.counter + 1);
        }
        if (props.isSelected === true) {
          toggleEmojie(props.id);
          props.setCounter(props.counter - 1);
        }
      }}
      className="flex flex-col justify-center items-center gap-2 cursor-pointer"
    >
      <div
        className={clsx(
          'w-[56px] h-[56px] text-[30px] flex justify-center items-center rounded-lg text-center',
          props.isSelected ? 'bg-white/40' : 'bg-[#363740]'
        )}
      >
        {props.emojie}
      </div>
      <p className="text-white/40">{props.genre}</p>
    </div>
  );
}

export default Genreonclick;
