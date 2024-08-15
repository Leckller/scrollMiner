import { ReactNode, useState } from 'react';
import Context from './Context';
import { Floors } from '../types/floors';

function Provider({ children }: { children:ReactNode }) {
  const [height, setHeight] = useState(0);
  const [floors, setFloors] = useState<Floors[]>(['terra', 'terra', 'areia']);

  return (
    <Context.Provider value={ { height, setHeight, floors, setFloors } }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
