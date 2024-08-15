import { useContext, useEffect, useState } from 'react';
import randomItem from '../../utils/randomItem';
import Context from '../../State/Context';
import { ItemsType } from '../../types/items';
import { Bacalhau, Sardinha } from '../../Class/AguaClasses';

function Agua() {
  const { setMoney } = useContext(Context);
  const [items, setItems] = useState<ItemsType[]>([]);

  const handleClick = (item: ItemsType) => {
    setItems((prev) => [...prev.filter((i) => i.id !== item.id)]);
    setMoney((prev) => prev + item.value);
  };

  useEffect(() => {
    const defaultItems:ItemsType[] = [new Sardinha(), new Bacalhau()];
    const random = randomItem(defaultItems, Math.floor(Math.random() * 3));
    setItems(random);
  }, []);

  return (
    <article className="w-full h-[5vh] bg-blue-400">
      {items.map((item) => (
        <button key={ item.id } onClick={ () => handleClick(item) }>
          {item.type}
        </button>
      ))}
    </article>
  );
}

export default Agua;
