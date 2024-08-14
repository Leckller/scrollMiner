import { ReactNode, useState } from 'react';
import Context from './Context';

function Provider({ children }: { children:ReactNode }) {
  const [height, setHeight] = useState(0);

  return (
    <Context.Provider value={ { height, setHeight } }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
