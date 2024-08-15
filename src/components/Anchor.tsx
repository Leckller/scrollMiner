function Anchor({ id, text, bottom = false }
: { id: string, text: string, bottom?: boolean }) {
  return (
    <a
      className={ `
        size-16 rounded-full flex justify-center items-center
        border-2 border-black 
        ${bottom ? 'absolute bottom-16 right-5' : ''}
      ` }
      href={ id }
    >
      {text}
    </a>
  );
}

export default Anchor;
