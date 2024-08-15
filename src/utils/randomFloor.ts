import { Floors } from '../types/floors';

const randomFloor = (floors: Floors[]): Floors => {
  const randomNumber = Math.floor(Math.random() * floors.length);
  return floors[randomNumber];
};

export default randomFloor;
