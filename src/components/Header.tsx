import { useContext } from 'react';
import Context from '../State/Context';

function Header() {
  const { height, money } = useContext(Context);
  return (
    <header
      className="fixed  w-full
      flex flex-row justify-evenly p-[20px]
      bg-blue-500 z-10
      "
    >
      <article className="w-[30%] flex items-center justify-center">
        <p>{`Profundidade escavada: ${height}`}</p>
      </article>
      <article className="w-[40%] flex items-center justify-center">
        <h1>Scroll Miner</h1>
      </article>
      <article className="w-[30%] flex items-center justify-around">
        <p>{`Dinheiro: ${money}`}</p>
      </article>
    </header>
  );
}

export default Header;
