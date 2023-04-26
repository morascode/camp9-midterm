import clsx from 'clsx';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  children: string;
  svg?: boolean;
}

function MovieDetailHeader(props: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigate();
  return (
    <div className="relative">
      <button onClick={() => navigation(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-4 text-white absolute top-1 left-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <p className="text-white text-[16px] font-bold text-center">
        {props.children}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onClick={() => {
          setIsLiked(!isLiked);
        }}
        className={clsx(
          'w-5 h-4 absolute top-1 right-5',
          props.svg ? 'stroke-red' : 'hidden',
          props.svg && isLiked ? 'stroke-red fill-red' : 'stroke-red'
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  );
}

export default MovieDetailHeader;
