import { getRandomInArray } from '../utils/random.util';

export const signList =  [
  'Áries',
  'Touro',
  'Gêmeos',
  'Câncer',
  'Leão',
  'Virgem',
  'Libra',
  'Escorpião',
  'Sagitário',
  'Capricórnio',
  'Aquário',
  'Peixes',
];

export const getRandomSign = () => {
  return getRandomInArray(signList);
}