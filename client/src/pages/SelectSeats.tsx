import { useState } from 'react';
import Seats from '../components/Seats';
import HeaderPage from '../components/HeaderPage';
import SeatPopover from '../components/SeatPopover';

function SelectSeats() {
  const [seatObject, setSeatObject] = useState({ front: 0, middle: 0, back: 0 });
  return (
    <div>
      <div className="flex flex-col items-center">
        <HeaderPage children={'Select Seats'} />
        <div className="h-[5px] w-[279px] bg-yellow"></div>
        <Seats setSeatObject={setSeatObject} seatObject={seatObject} />
        <div className="flex gap-[25px] mt-1 mb-8">
          <div className="flex gap-[6px]">
            <div className="bg-white h-4 w-4 rounded-full"></div>
            <p className="typography-description">Available</p>
          </div>
          <div className="flex gap-[6px]">
            <div className="bg-yellow h-4 w-4 rounded-full"></div>
            <p className="typography-description">Selected</p>
          </div>
          <div className="flex gap-[6px]">
            <div className="bg-dark-light h-4 w-4 rounded-full"></div>
            <p className="typography-description">Reserved</p>
          </div>
        </div>
        <SeatPopover seatObject={seatObject} />
      </div>
    </div>
  );
}

export default SelectSeats;
