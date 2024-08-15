import { useContext } from 'react';
import Context from '../State/Context';
import useMiner from '../hooks/useMiner';
import useTimer from '../hooks/useTimer';
import Floor from './Floor';
import Loja from './Loja';

function Main() {
  const { height, floors } = useContext(Context);
  useMiner();
  useTimer();
  return (
    <main
      id="top"
      className={ `"flex flex-col justify-evenly ${`h-[${height}]`} relative` }
    >
      <div className="h-[95vh] flex pt-[10vh]">
        <Loja />
      </div>
      <Floor type="grama" />
      {floors.map((f, i) => (
        <Floor type={ f } key={ f + i } />
      ))}
      <a
        href="#top"
        className="absolute size-20 rounded-full flex justify-center items-center
        border-2 border-black bottom-20 right-20
        "
      >
        go to top
      </a>
      <div className="bg-black h-[5vh]" id="sentinel" />
    </main>
  );
}

export default Main;
