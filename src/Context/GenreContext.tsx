import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { EmojieLibrary } from './EmojieLibrary';

export const EmojieContext = createContext({
  EmojieLibrary,
});

export const useEmojieLibrary = () => useContext(EmojieContext);

function EmojieProvider({ children }: { children: any }) {
  const [emojieLibrary, setEmojieLibrary] = useState(EmojieLibrary);

  useEffect(() => {
    setEmojieLibrary(emojieLibrary);
  });

  return (
    <EmojieContext.Provider value={{ EmojieLibrary }}>
      {children}
    </EmojieContext.Provider>
  );
}

export default EmojieProvider;
