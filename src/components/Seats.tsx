import React from 'react';
import { Seat } from './Seat';

function Seats() {
  const seatsArray = [
    [null, 'A-1', 'A-2', 'A-3', null, 'A-4', 'A-5', 'A-6', null],
    ['B-1', 'B-2', 'B-3', 'B-4', null, 'B-5', 'B-6', 'B-7', 'B-8'],
    ['C-1', 'C-2', 'C-3', 'C-4', null, 'C-5', 'C-6', 'C-7', 'C-8'],
    ['D-1', 'D-2', 'D-3', 'D-4', null, 'D-5', 'D-6', 'D-7', 'D-8'],
    ['E-1', 'E-2', 'E-3', 'E-4', null, 'E-5', 'E-6', 'E-7', 'E-8'],
    [null, 'F-1', 'F-2', 'F-3', null, 'F-4', 'F-5', 'F-6', null],
  ];

  function flattenArrays(arrays: (string | null)[][]) {
    const flattenedArray = arrays.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
    return flattenedArray;
  }
  const allSeats = flattenArrays(seatsArray);

  const seatsWithoutNull = allSeats.filter(value => {
    return value !== null;
  });

  function randomSeats(seatsArray: string[]) {
    let random = [];
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * seatsArray.length);
      random.push(seatsArray[randomIndex]);
    }
    return random;
  }
  const disabledSeats = randomSeats(seatsWithoutNull as string[]);

  return (
    <div className="grid grid-rows-6 grid-cols-9 gap-3">
      {seatsArray.map(item1 => {
        return item1.map((item, index) => {
          return item ? (
            disabledSeats.includes(item) ? (
              <Seat disabled={true} key={index} />
            ) : (
              <Seat disabled={false} key={index} />
            )
          ) : (
            <div key={index}></div>
          );
        });
      })}
    </div>
  );
}

export default Seats;
