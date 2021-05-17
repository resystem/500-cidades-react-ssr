import { getRandomInArray } from '../utils/random.util';

export const languagesList = [
  'Inglês',
  'francês',
  'alemão',
  'espanhol',
  'mandarim',
  'polonês',
  'swahili',
];

export const getRandomLanguage = () => {
  return getRandomInArray(languagesList);
}