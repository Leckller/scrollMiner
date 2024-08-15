import { createContext } from 'react';
import { Floors } from '../types/floors';

type ContextType = {
  height: number,
  setHeight: (p: number) => void,
  floors: Floors[],
  setFloors: React.Dispatch<React.SetStateAction<Floors[]>>,
  start: boolean,
  setStart: React.Dispatch<React.SetStateAction<boolean>>,
  limitTimer: number,
  setLimitTimer: React.Dispatch<React.SetStateAction<number>>,
  seconds: number,
  setSeconds: React.Dispatch<React.SetStateAction<number>>,
  money: number,
  setMoney: React.Dispatch<React.SetStateAction<number>>,
};

const Context = createContext({} as ContextType);

export default Context;
