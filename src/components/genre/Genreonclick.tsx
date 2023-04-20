import clsx from 'clsx';
import React, { useState } from 'react';

export interface Props {
  emojie: string;
  genre: string;
  id: number;
  selected: boolean;
}

function Genreonclick(props: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      key={props.id}
      onClick={() => setSelected(!selected)}
      className="flex flex-col justify-center items-center gap-2 cursor-pointer"
    >
      <div
        className={clsx(
          'w-[56px] h-[56px] text-[30px] flex justify-center items-center rounded-lg text-center',
          selected ? 'bg-white/40' : 'bg-[#363740]'
        )}
      >
        {props.emojie}
      </div>
      <p className="text-white/40">{props.genre}</p>
    </div>
  );
}

export default Genreonclick;
