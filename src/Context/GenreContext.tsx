import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { emojieLibrary } from './EmojieLibrary';

interface EmojieLibraryEntry {
  Genre: string;
  Emoji: string;
  id: number;
  isSelected: boolean;
}

type EmojieContextType = {
  EmojieLibrary: EmojieLibraryEntry;
};

export const EmojieContext = createContext({
  emojieLibrary: emojieLibrary,
  toggleEmojie: (id: number) => {},
});

export const useEmojieLibrary = () => useContext(EmojieContext);

function EmojieProvider({ children }: { children: any }) {
  const [emojiesState, setEmojieState] = useState(emojieLibrary);
  console.log(emojiesState);
  //find by id (emojielibrary)
  //get back a single object
  //change state of that object
  //set the state again - don't loose other object (spread)
  function toggleEmojie(id: number) {
    emojieLibrary.filter(param => {
      if (param.id === id) {
        param.isSelected = param.isSelected ? false : true;
        return param;
      }
    });
    useEffect(() => setEmojieState(emojieLibrary));
  }
  toggleEmojie(1);
  return (
    <EmojieContext.Provider
      value={{ emojieLibrary: emojiesState, toggleEmojie }}
    >
      {children}
    </EmojieContext.Provider>
  );
}

export default EmojieProvider;
