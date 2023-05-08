import React from 'react';
import { createContext } from 'react';

export const SeatsContext = createContext({
  seatObject: {
    front: 0,
    middle: 0,
    back: 0,
  },
  setSeatObject: React.Dispatch<React.SetStateAction<{
    front: number;
    middle: number;
    back: number;
}>> 
});