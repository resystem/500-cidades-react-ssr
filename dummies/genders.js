import { getRandomInArray } from "../utils/random.util";

export const GenderList = [
  'Mulher cisgênero',
  'Mulher trans',
  'Travesti',   
  'Homem Cisgênero',
  'Homem trans',   
  'Intersexual',
  'Não-binário',
  'Fluido',
  'Agênero', 
  'Prefiro não dizer',
];

export const getRandomGender = () => {
  return getRandomInArray(GenderList);
}