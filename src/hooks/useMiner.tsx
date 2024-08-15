import { useContext, useEffect } from 'react';
import Context from '../State/Context';
import { Floors } from '../types/floors';

function useMiner() {
  const { height, setHeight, setFloors } = useContext(Context);
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
}

export default useMiner;
