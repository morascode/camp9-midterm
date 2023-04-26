import { ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: string;
  hasHeartButton?: boolean;
  onHeartButtonClick?: () => void;
}

function HeaderPage(props: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigate();
  return (
    <div className="flex justify-between items-center px-5 pb-6 pt-8 sticky top-0 bg-dark">
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
    </div>
  );
}

export default HeaderPage;
