import { useContext } from 'react';
import Context from '../State/Context';
import useMiner from '../hooks/useMiner';
import useTimer from '../hooks/useTimer';
import Floor from './Floor';
import Loja from './Loja';
import Anchor from './Anchor';

function Main() {
  const { height, floors } = useContext(Context);
  useMiner();
  useTimer();
  return (
    <main
      id="top"
      className={ `"flex flex-col justify-evenly md:pt-[0px]
         pt-[50px] ${`h-[${height}]`} relative` }
    >
      <div className="h-[95vh] flex pt-[10vh] flex-col">
        <article className="w-full flex justify-end pr-[20px]">
          <Anchor id="#sentinel" text="Bottom" />
        </article>
        <Loja />
      </div>
      <Floor type="grama" />
      {floors.map((f, i) => (
        <Floor type={ f } key={ f + i } />
      ))}
      <Anchor id="#top" text="Top" bottom />
      <div className="bg-black h-[5vh]" id="sentinel" />
    </main>
  );
}

export default Main;
