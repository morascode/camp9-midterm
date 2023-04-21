import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmojieLibrary } from '../../../Context/GenreContext';
import Button from '../../Button';
import GenresSelectorLayout from './GenresSelectorLayout';

function GenresSelectionPage() {
  const { counter } = useEmojieLibrary();
  return (
    <div className="flex flex-col px-5 pt-8 pb-6 gap-10 bg-[#1C1C27] w-full h-full">
      <div className="flex flex-row justify-center">
        <Link to={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-4 absolute top-9 left-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <h2 className="text-white">Genres</h2>
      </div>
      <GenresSelectorLayout></GenresSelectorLayout>
      <div className="flex flex-row gap-1">
        <p className="text-white">{counter}</p>
        <p className="text-white/40">Genre selected</p>
      </div>
      <Button>Confirm selected Genres</Button>
    </div>
  );
}

export default GenresSelectionPage;
