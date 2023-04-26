import { ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: string;
  hasHeartButton?: boolean;
  onHeartButtonClick?: () => void;
}

// This is the header component to be used for all pages
// it has three elements:
// 1. the left arrow that navigates to the previous page (always present)
// 2. the title of the page ('children' props)
// 3. the little red heart (invisible by default, if you want it visible, pass the hasHeartButton={true} prop. If you want some function to be called when the heart is clicked, eg. one that adds the movie to favorites, pass it as onHeartButtonClick prop)
// it has its own padding, so take care it does not get additional vertical and horizontal padding from your component

function HeaderPage(props: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigate();
  return (
    <header className="flex justify-between items-center px-5 pb-6 pt-8 sticky top-0 bg-dark">
      <button onClick={() => navigation(-1)}>
        <ChevronLeftIcon className="typography-title w-5"></ChevronLeftIcon>
      </button>
      <h1 className="typography-title">{props.children}</h1>
      <div className="w-5 h-5">
        {props.hasHeartButton && (
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              props.onHeartButtonClick && props.onHeartButtonClick();
            }}
            className={
              `w-full transition-colors duration-500 ` +
              (isLiked ? `text-red` : `stroke-red text-transparent`)
            }
          >
            <HeartIcon></HeartIcon>
          </button>
        )}
      </div>
    </header>
  );
}

export default HeaderPage;
