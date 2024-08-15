import { useContext } from 'react';
import Context from '../State/Context';

function Header() {
  const { height, limitTimer, money } = useContext(Context);
  return (
    <header
      className="fixed h-[5vh] min-h-[30px] w-full
      flex flex-row justify-evenly p-[20px]
      "
    >
      <article className="w-[30%] flex items-center justify-center">
        <p>{`Profundidade escavada: ${height}`}</p>
      </article>
      <article className="w-[40%] flex items-center justify-center">
        <h1>Scroll Miner</h1>
      </article>
      <article className="w-[30%] flex items-center justify-center">
        <p>{`Dinheiro: ${money}`}</p>
      </article>
    </header>
  );
}

export default Header;
