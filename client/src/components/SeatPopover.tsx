import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function SeatPopover() {
  return (
    <>
      <div className="bg-[#494952] rounded-[12px] w-full pt-7 pb-5 px-5">
        <div></div>
        <hr className='white-dimmed-heavy ' />
        <div className="flex justify-between items-end mt-7 ">
          <div className="grid typography-title text-2xl">
            <span className="typography-description ">Total Price</span>43,50
          </div>
          <Link className="w-[215px]" to={'/success'}>
            <Button className="">Book Ticket</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
//justify-content: space-between;
//align-items: flex-end;

export default SeatPopover;
