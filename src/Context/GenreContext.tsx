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
  return (
    <EmojieContext.Provider value={{ EmojieLibrary }}>
      {children}
    </EmojieContext.Provider>
  );
}

export default EmojieProvider;
