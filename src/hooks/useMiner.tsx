import { useContext, useEffect } from 'react';
import Context from '../State/Context';
import { Floors } from '../types/floors';
import randomFloor from '../utils/randomFloor';

function useMiner() {
  const { height, setHeight, setFloors, limitTimer, setStart } = useContext(Context);
  useEffect(() => {
    const sentinel = document.querySelector('#sentinel')!;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setStart(true);
        observer.unobserve(sentinel);
        setTimeout(() => {
          const newHeight = height + 100;
          let floor: Floors = 'terra';

          if (height < 3000) {
            floor = randomFloor(['terra', 'agua', 'areia']);
          } else {
            floor = randomFloor(['pedra', 'ouro']);
          }
          setFloors((p) => [...p, floor]);
          setHeight(newHeight);
          setStart(false);
        }, limitTimer);
      }
    }, {
      threshold: 0.8,
    });

    observer.observe(sentinel);
  }, [height]);
}

export default useMiner;
