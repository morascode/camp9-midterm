import React from 'react';
import useMovieHook from './genre_hook/GenreHook';

function GenreId() {
  const { data } = useMovieHook();

  console.log(data);
  return <div>{data}</div>;
}

export default GenreId;
