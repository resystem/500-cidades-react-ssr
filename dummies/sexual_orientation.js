import { getRandomInArray } from "../utils/random.util";

export const sexualOrientationList =  [
  'Heterossexual',
  'Homossexual',
  'Bissexual',
  'Pansexual',
  'Polisexual',
  'Assexual',
  'Prefiro não declarar',
];

export const getRandomSexualOrientation = () => {
  return getRandomInArray(sexualOrientationList);
}