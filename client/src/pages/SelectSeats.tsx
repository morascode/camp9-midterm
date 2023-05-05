import Seats from '../components/Seats';
import HeaderPage from '../components/HeaderPage';
import SeatPopover from '../components/SeatPopover';

//The PageHeader is apparently called now HeaderPage? I have changed this in the code below.
function SelectSeats() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <HeaderPage children={'Select Seats'} />
        <div className="h-[5px] w-[279px] bg-yellow  "></div>
        <div className='screen h-[20px] w-[279px]' ></div>
        <Seats />
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
        <SeatPopover />
      </div>
    </div>
  );
}

export default SelectSeats;
