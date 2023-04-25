// import Barcode from "react-barcode";
import { useParams } from 'react-router-dom';
import {
  MovieDbResponse,
  MovieDetailDbResponse,
  TicketProps,
} from '../utilities/types';
import useQuery from '../hook/useQuery';
import Button from '../components/Button';

function Ticket() {
  // const { id } = useParams();
  const id = 502356; //Mock as SuperMario. please change to useParams() when you are ready to test

  const { data, isLoading } = useQuery<MovieDetailDbResponse>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7bdc02c5d27a184488dd56b87a8cad76&language=en-US&append_to_response=credits`
  );

  if (isLoading || !data) {
    return <p>'loading...'</p>;
  }

  return (
    <div className=" grid place-items-center pt-8 px-5 ">
      <div className="bg-[#494952] min-h-screen	 rounded-[12px] items-center ">
        <div className=" ">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="Movie Poster"
            className=" top-0 rounded-t-[12px]  object-cover w-full h-[160px]"
          />
        </div>
        <div className=" grid">
          <div className="">
            <h2 className="typography-title pt-2 pb-6 px-6">{data.title}</h2>
          </div>
          <div className="flex px-6 ">
            <div className="grid">
              <span className="">Date</span>
              <br />
              <p className="">08 jan</p>
            </div>
            <div className="grid">
              <span className="">Time</span>
              <p className="">12:30</p>
            </div>
            <div className="grid">
              <span className="">Price</span>
              <p className="">56,00</p>
            </div>
            <div className="grid">
              <span className="">Seats</span>
              <p className="">c-3,c-4,c-5</p>
            </div>
          </div>
        </div>
        <div className="">Barcode</div>
      </div>
      <div className=" debug w-[335px] py-4">
        <Button className=" 	">Back To Home</Button>
      </div>
    </div>
  );
}

export default Ticket;

// <div className="barcode-container relative">
//           <hr className="barcode-separator absolute top-[50%] left-[-10px] right-[-10px] border-dotted" />
//           {/* <Barcode value="1234567890" /> */}
//           <span className="barcode-separator__circle absolute top-[-5px] left-[-5px] w-4 h-4 rounded-full bg-black"></span>
//           <span className="barcode-separator__circle absolute top-[-5px] right-[-5px] w-4 h-4 rounded-full bg-black"></span>
//         </div>
