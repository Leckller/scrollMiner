import { useContext } from 'react';
import Context from '../State/Context';

function Header() {
  const { height, seconds } = useContext(Context);
  return (
    <header
      className="fixed"
    >
      {`${height} - ${seconds}`}
    </header>
  );
}

export default Header;
