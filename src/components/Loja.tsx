import { useContext } from 'react';
import Context from '../State/Context';

function Loja() {
  const { limitTimer } = useContext(Context);
  return (
    <section className="flex flex-row w-full justify-around items-center">
      <article className="flex flex-col gap-5">
        <p>{`Velocidade de escavação: ${limitTimer / 1000} segundos`}</p>
        <p>
          Melhorar a velocidade de escavação
        </p>
        <button className="w-full border rounded-md bg-blue-50">
          1000
        </button>
      </article>
      <article className="flex flex-col gap-5">
        <p>
          Aumentar o poder de destruição
        </p>
        <button className="w-full border rounded-md bg-blue-50">
          2000
        </button>
      </article>
    </section>
  );
}

export default Loja;
