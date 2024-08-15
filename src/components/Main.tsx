import { useContext } from 'react';
import Context from '../State/Context';
import useMiner from '../hooks/useMiner';

function Main() {
  const { height, floors } = useContext(Context);
  useMiner();
  return (
    <div
      id="top"
      className={ `"flex flex-col justify-evenly ${`h-[${height}]`}` }
    >
      <div className="h-[95vh]" />
      <div className="h-[5vh]">grama</div>
      {floors.map((f, i) => (
        <div className="h-[5vh]" key={ f + i }>{f}</div>
      ))}
      <div className="bg-black" id="sentinel" />
    </div>
  );
}

export default Main;
