/* eslint-disable max-classes-per-file */
import { AguaItems, ItemsType } from '../types/items';

export class Sardinha implements ItemsType {
  public type:AguaItems = 'sardinha';

  public id = new Date().getTime();

  public value = 5;
}
export class Bacalhau implements ItemsType {
  public type:AguaItems = 'bacalhau';

  public id = new Date().getTime();

  public value = 10;
}
