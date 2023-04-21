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
  EmojieLibrary: EmojieLibraryEntry[];
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
  //hope thuis helps
  function toggleEmojie(id: number) {
    // const newEmojieLibrary = emojieLibrary.filter(
    //   (emojie, emojieIndex, emojies) => {
    //     if (emojie.id === id) {
    //       emojie.isSelected = !emojie.isSelected;
    //     }
    //     if (emojie.id !== id) {
    //       return emojie;
    //     }
    //   }
    // );
    const newEmojieLibrary = emojieLibrary.map(emojie => {
      if (emojie.id === id) {
        emojie.isSelected = !emojie.isSelected;
      }
      return emojie;
    });
    setEmojieState(newEmojieLibrary);
  }

  return (
    <EmojieContext.Provider
      value={{ emojieLibrary: emojiesState, toggleEmojie }}
    >
      {children}
    </EmojieContext.Provider>
  );
}

export default EmojieProvider;
