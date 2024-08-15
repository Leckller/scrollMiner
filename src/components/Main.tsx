import { useContext } from 'react';
import Context from '../State/Context';
import useMiner from '../hooks/useMiner';
import useTimer from '../hooks/useTimer';
import Floor from './Floor';

function Main() {
  const { height, floors } = useContext(Context);
  useMiner();
  useTimer();
  return (
    <main
      id="top"
      className={ `"flex flex-col justify-evenly ${`h-[${height}]`}` }
    >
      <div className="h-[95vh]" />
      <Floor type="grama" />
      {floors.map((f, i) => (
        <Floor type={ f } key={ f + i } />
      ))}
      <div className="bg-black h-[5vh]" id="sentinel" />
    </main>
  );
}

export default Main;
