const getRandomUniqueString = (array, strings) => {
  const string = getRandomInArray(array);
  if (strings.includes(string) || !string ) getRandomUniqueString(array, strings);
  else return string;
}

export const getRandomNumber = (max) => {
  const numbers = []
  for (let i = 0; i < max; i++) {
    numbers.push(i)
  }
  return Math.ceil((Math.random() * max));
}

export const getRandomInArray = (array) => {
  const length = array.length;
  const randomNum = Math.floor((Math.random() * length));
  if (!array[randomNum]) getRandomInArray(array);
  return array[randomNum];
}

export const getNRandomStringsInArray = (array, n) => {
  console.log('🚀 ~ 1')
  let strings = []
  let string = ''
  const length = array.length;
  const randomNum = getRandomNumber(n || length);
  
  for (let i = 0; i < randomNum; i++) {
    const newStr = getRandomUniqueString(array, strings);
    string = string + newStr + ((randomNum -1 === i) ? '' : ', ');
  }
  return string.split(',').map(s => s.trim());
}
