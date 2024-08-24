import { Stats } from './stats';

export type Item = {
  reqLevel: number;
  imgURL: string;
  price: number;
  stats?: Stats;
  expMultiplier: number;
  mesosMultiplier: number;
};
