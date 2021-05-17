import { nameList } from './names';
import { lastNameList } from './last_names';
import { getRandomInArray } from '../utils/random.util';

export const dummyDomainList = [
  '.com',
  '.org',
  '.net',
  '.gov',
  '.info',
  '.vc',
  '.com.br',
  '.info.me',
];

export const getRandomWebsite = () => {
  const lastName = getRandomInArray(lastNameList);
  const name = getRandomInArray(nameList);
  const domain = getRandomInArray(dummyDomainList);
  const hasName = Math.random() > 0.5;
  return `https://${name}${!hasName || lastName}${domain}`;
};