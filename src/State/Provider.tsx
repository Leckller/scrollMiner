import { ReactNode, useState } from 'react';
import Context from './Context';
import { Floors } from '../types/floors';

function Provider({ children }: { children:ReactNode }) {
  const [height, setHeight] = useState(0);
  const [floors, setFloors] = useState<Floors[]>(['terra', 'terra', 'areia']);
  const [start, setStart] = useState(false);
  const [limitTimer, setLimitTimer] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [money, setMoney] = useState(0);

  return (
    <Context.Provider
      value={ { height,
        setHeight,
        floors,
        setFloors,
        limitTimer,
        setLimitTimer,
        start,
        setStart,
        seconds,
        setSeconds,
        money,
        setMoney,
      } }
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
