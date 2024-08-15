export type AguaItems = 'sardinha' | 'bacalhau';
export type TerraItems = 'minhoca';
export type PedraItems = 'ouro';

export interface ItemsType {
  type: AguaItems | TerraItems | PedraItems,
  id: number,
  value: number
}
