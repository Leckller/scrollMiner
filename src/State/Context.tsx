import { createContext } from 'react';
import { Floors } from '../types/floors';

type ContextType = {
  height: number,
  setHeight: (p: number) => void,
  floors: Floors[],
  setFloors: React.Dispatch<React.SetStateAction<Floors[]>>
};

const Context = createContext({} as ContextType);

export default Context;
