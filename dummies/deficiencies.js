import { getRandomInArray } from "../utils/random.util";

export const deficiencyList = [
  'Deficiência Visual',
  'Deficiência Auditiva',
  'Deficiência Mental',
  'Deficiência Física',
  'Deficiência Múltipla',
  '',
];

export const getRandomDeficiency = () => {
  return getRandomInArray(deficiencyList);
}