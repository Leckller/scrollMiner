import { useEffect, useState } from 'react';

function useTimer(): [() => void, number] {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(true);
  const toggleStart = () => {
    setStart((prev) => !prev);
  };

  useEffect(() => {
    if (seconds >= 30) {
      setSeconds(0);
    }
    if (start) {
      const id = setInterval(() => {
        setSeconds(seconds + 1);
        console.log(seconds);
      }, 100);

      return () => clearInterval(id);
    }
  }, [start, seconds]);

  return [toggleStart, seconds];
}

export default useTimer;
