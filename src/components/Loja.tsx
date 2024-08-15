function Loja() {
  return (
    <section className="flex flex-row w-full justify-around items-center">
      <article className="flex flex-col gap-5">
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
