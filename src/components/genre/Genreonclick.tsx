import clsx from 'clsx';
import React, { useState } from 'react';

interface Props {
  emojie: string;
  genre: string;
  id: number;
}

function Genreonclick(props: Props) {
  const [selected, setSelected] = useState(false);
  return (
    <div key={props.id} onClick={() => setSelected(!selected)}>
      <div
        className={clsx(
          'w-[56px] h-[56px] flex justify-center items-center rounded-lg text-center',
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
