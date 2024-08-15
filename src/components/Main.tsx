import { useContext, useEffect, useState } from 'react';
import Context from '../State/Context';
import { Floors } from '../types/floors';

function Main() {
  const { height, setHeight } = useContext(Context);
  const [floors, setFloors] = useState<Floors[]>(['terra']);

  useEffect(() => {
    const sentinel = document.querySelector('#sentinel')!;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        observer.unobserve(sentinel);
        const newHeight = height + 100;
        let floor: Floors = 'terra';

        if (height < 3000) {
          const randomNumber = Math.floor(Math.random() * 3);
          const f:Floors[] = ['terra', 'agua', 'areia'];
          floor = f[randomNumber];
        } else {
          const randomNumber = Math.floor(Math.random() * 2);
          const f:Floors[] = ['pedra', 'ouro'];
          floor = f[randomNumber];
        }

        setFloors((p) => [...p, floor]);
        setHeight(newHeight);
        document.body.style.overflow = 'hidden';
      }
    }, {
      rootMargin: '100px',
    });

    setTimeout(() => {
      document.body.style.overflow = 'auto';
      observer.observe(sentinel);
    }, 1000);
  }, [height]);

  return (
    <div
      id="top"
      className={ `"flex flex-col justify-evenly ${`h-[${height}]`}` }
    >
      <div className="h-[90vh]" />
      <div className="h-[10vh]">terra</div>
      {floors.map((f, i) => (
        <div className="h-[100px]" key={ f + i }>{f}</div>
      ))}
      <div className="bg-black" id="sentinel" />
    </div>
  );
}

export default Main;
