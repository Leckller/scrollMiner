import { useEffect, useState } from 'react';
import { AguaItems } from '../../types/items';
import randomItem from '../../utils/randomItem';

function Agua() {
  const [items, setItems] = useState<AguaItems[]>([]);
  useEffect(() => {
    const defaultItems:AguaItems[] = ['fish', 'fish'];
    const random = randomItem(defaultItems, Math.floor(Math.random() * 3));
    setItems(random);
  }, []);
  return (
    <article className="w-full h-[5vh] bg-blue-400">
      {items.map((item, index) => (
        <button key={ item + index }>
          {item}
        </button>
      ))}
    </article>
  );
}

export default Agua;
