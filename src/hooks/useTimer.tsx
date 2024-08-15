import { useContext, useEffect } from 'react';
import Context from '../State/Context';

function useTimer() {
  const { limitTimer, start, seconds, setSeconds } = useContext(Context);

  useEffect(() => {
    if (start) {
      const id = setInterval(() => {
        setSeconds(seconds + 1);
      }, limitTimer / 10);

      return () => clearInterval(id);
    }
    setSeconds(0);
  }, [start, seconds]);
}

export default useTimer;
