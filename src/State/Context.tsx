import { createContext } from 'react';

type ContextType = {
  height: number,
  setHeight: (p: number) => void
};

const Context = createContext({} as ContextType);

export default Context;
