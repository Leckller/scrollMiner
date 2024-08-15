const randomItem = <T>(items: T[], max: number): T[] => {
  const random = [];
  for (let i = 0; i <= max; i++) {
    const randomIndex = Math.floor(Math.random() * items.length);
    random.push(items[randomIndex]);
  }
  return random;
};

export default randomItem;
