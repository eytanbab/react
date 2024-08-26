import { Stats } from './stats';

export type Item = {
  reqLevel: number;
  name: string;
  imgURL: string;
  price: number;
  stats?: Stats;
  attack?: number;
  expMultiplier: number;
  mesosMultiplier: number;
};
