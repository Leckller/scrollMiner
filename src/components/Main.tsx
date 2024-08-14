import { useContext, useEffect } from 'react';
import Context from '../State/Context';

function Main() {
  const { height, setHeight } = useContext(Context);
  const go = false;

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry.some((e) => e.isIntersecting) && go) {
        setHeight(height + Math.floor(Math.random() * 50 + 1));
        (entry[0].target as HTMLDivElement).style.marginTop = `${height}px`;
        document.body.style.overflow = 'hidden';
      }
    });
    const sentinel = document.querySelector('#sentinel') as HTMLElement;
    observer.observe(sentinel);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [height]);

  return (
    <div
      onScrollCapture={ () => console.log('tadam') }
      id="top"
      className={ `"flex flex-col justify-evenly bg-blue-100 ${`h-[${height}]`}` }
      onScroll={ () => console.log('penis') }
    >
      <div className="h-[100vh]" />
      <div className="h-[100px] bg-black" id="sentinel" />
    </div>
  );
}

export default Main;
