import { getRandomInArray } from "../utils/random.util";

export const raceList = [
  'Branca',
  'Preta',
  'Asiática',
  'Parda',
  'Indígena',
  'Prefiro não declarar' ,
];

export const getRandomRace = () => {
  return getRandomInArray(raceList);
}