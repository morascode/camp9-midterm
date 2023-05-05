import { useState } from 'react';
import clsx from 'clsx';
import { useContext } from 'react';
import { SeatsContext } from '../contexts/SeatsContext';

type Props = {
  disabled: Boolean;
  type: SeatSection;
  seatId: string
};

export type SeatSection = 'front' | 'middle' | 'back';

export function Seat(props: Props) {
  const [selected, setSelected] = useState(false);
  const seatObject = useContext(SeatsContext)
  console.log(seatObject)

  function handleSeatObject(type: string, n: number) {
    if (type === "front") {
      const newFront = seatObject.front + n
      return {...seatObject, front: newFront}
    } else if (type === "middle") {
      const newMiddle = seatObject.middle + n
      return {...seatObject, middle: newMiddle}
    } else if (type === "back") {
      const newBack = seatObject.back + n
      return {...seatObject, back: newBack}
    }
  }

  return (
    <button
      disabled={false}
      className={clsx(
        'rounded-sm h-7 w-7',
        props.disabled === true
          ? 'bg-[#363740]'
          : selected
          ? 'bg-[#FFB43A]'
          : 'bg-white'
      )}
      onClick={e => {
        switch (selected) {
          case false:
            setSelected(true);
            setSeatObject(handleSeatObject(type, +1))
            console.log(seatObject)
            break; 
          case true:
            setSelected(false);
            setSeatObject(handleSeatObject(type, -1))
            console.log(seatObject)
            break;
        }
      }}
    ></button>
  );
}
