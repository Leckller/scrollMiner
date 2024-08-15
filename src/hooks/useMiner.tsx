import { useContext, useEffect } from 'react';
import Context from '../State/Context';
import { Floors } from '../types/floors';
import randomFloor from '../utils/randomFloor';

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
          floor = randomFloor(['terra', 'agua', 'areia']);
        } else {
          floor = randomFloor(['pedra', 'ouro']);
        }
        setFloors((p) => [...p, floor]);
        setHeight(newHeight);
      }
    }, {
      rootMargin: '100px',
    });

    setTimeout(() => {
      observer.observe(sentinel);
    }, 1000);
  }, [height]);
}

export default useMiner;
