import React, { Children, createContext, useEffect, useState } from 'react';
import Genreonclick, { Props } from '../components/genre/Genreonclick';

export const GenreContext = createContext({
  toggleGenre: () => {},
});
function GenreProvider(children: Props) {
  const [Genre, setGenre] = useState();
  const toggleGenre = () => {};
  useEffect(() => {
    const selection = localStorage.getItem('Genre');
    if (selection) setGenre(selection);
  }, []);
  return (
    <GenreContext.Provider value={{ toggleGenre }}>
      {children.id}
    </GenreContext.Provider>
  );
}

export default GenreProvider;
