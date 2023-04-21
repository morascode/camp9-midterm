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

interface EmojieLibraryContext {
  emojieLibrary: EmojieLibraryEntry[];
  toggleEmojie: (id: number) => void;
  counter: number;
  countingEmojies: (isSelected: boolean) => void;
}

export const EmojieContext = createContext<EmojieLibraryContext>({
  emojieLibrary: emojieLibrary,
  toggleEmojie: (id: number) => {},
  counter: 0,
  countingEmojies: (isSelected: boolean) => {},
});

export const useEmojieLibrary = () => useContext(EmojieContext);

function EmojieProvider({ children }: { children: any }) {
  const [emojiesState, setEmojieState] = useState(emojieLibrary);
  const [counter, setCounter] = useState(0);

  function toggleEmojie(id: number) {
    const newEmojieLibrary = emojieLibrary.map(emojie => {
      if (emojie.id === id) {
        emojie.isSelected = !emojie.isSelected;
      }
      return emojie;
    });
    setEmojieState(newEmojieLibrary);
  }

  function countingEmojies(isSelected: boolean) {
    if (isSelected) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <EmojieContext.Provider
      value={{
        emojieLibrary: emojiesState,
        toggleEmojie,
        counter,
        countingEmojies,
      }}
    >
      {children}
    </EmojieContext.Provider>
  );
}

export default EmojieProvider;
