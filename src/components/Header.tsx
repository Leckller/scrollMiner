import { useContext } from 'react';
import Context from '../State/Context';

function Header() {
  const { height } = useContext(Context);
  return (
    <header
      className="fixed"
    >
      {height}
    </header>
  );
}

export default Header;
