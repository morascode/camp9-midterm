import React from "react";
// import Barcode from "react-barcode";
import { useParams } from "react-router-dom";
import { TicketProps } from "../utilities/types";

function Ticket({ movieTitle, movieTime, movieDate }: TicketProps) {
    return (
              <div className="ticket border-dotted border-2 border-black rounded-lg flex flex-col items-center w-72 h-96">
                <div className="ticket-header w-full h-1/2">
                  <img src="https://picsum.photos/200" alt="Movie Poster" className="w-full h-full object-cover" />
                </div>
                <div className="ticket-body w-full flex flex-col items-center">
                  <div className="movie-info mt-[-50px]">
                    <h2>{movieTitle}</h2>
                    <p>{movieTime}</p>
                    <p>{movieDate}</p>
                  </div>
                  <div className="barcode-container relative">
                    <hr className="barcode-separator absolute top-[50%] left-[-10px] right-[-10px]" />
                    {/* <Barcode value="1234567890" /> */}
                    <span className="barcode-separator__circle absolute top-[-5px] left-[-5px] w-4 h-4 rounded-full bg-black"></span>
                    <span className="barcode-separator__circle absolute top-[-5px] right-[-5px] w-4 h-4 rounded-full bg-black"></span>
                  </div>
                </div>
              </div>
            );
          };
    
            export default Ticket;