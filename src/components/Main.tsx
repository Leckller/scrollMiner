import { useContext } from 'react';
import Context from '../State/Context';
import useMiner from '../hooks/useMiner';
import Terra from './floors/Terra';
import Grama from './floors/Grama';
import Agua from './floors/Agua';
import Areia from './floors/Areia';
import Pedra from './floors/Pedra';
import Ouro from './floors/Ouro';
import useTimer from '../hooks/useTimer';

function Main() {
  const { height, floors } = useContext(Context);
  useMiner();
  const [a, timer] = useTimer();
  return (
    <main
      id="top"
      className={ `"flex flex-col justify-evenly ${`h-[${height}]`}` }
    >
      <div className="h-[95vh]" />
      <Grama />
      {floors.map((f, i) => {
        switch (f) {
          case 'terra':
            return <Terra />;
          case 'agua':
            return <Agua />;
          case 'areia':
            return <Areia />;
          case 'pedra':
            return <Pedra />;
          case 'ouro':
            return <Ouro />;
          default:
            return <Terra />;
        }
      })}
      <div className="bg-black" id="sentinel" />
    </main>
  );
}

export default Main;
