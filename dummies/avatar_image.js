import { getRandomInArray } from "../utils/random.util";

export const imageList = [
  'https://loremflickr.com/cache/resized/65535_50735100568_2dc7889c73_n_200_200_nofilter.jpg',
  'https://www.fillmurray.com/200/200',
  'https://loremflickr.com/cache/resized/65535_50548809727_2bc4206b57_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_51096400338_0e76f805ab_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_50531072851_fa827726de_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_50762589427_118aef63cf_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_50283130641_4ab0c9a769_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_50355695198_94af290885_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_51000962146_5cf31415af_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/65535_50908968217_91495c2b08_n_200_200_nofilter.jpg',
  'https://loremflickr.com/cache/resized/8364_8302371344_1cd6a458e9_n_200_200_nofilter.jpg',
  
  'https://placekitten.com/g/200/300',
  'http://www.stevensegallery.com/200/300',
  'http://www.stevensegallery.com/g/200/300',
  'https://picsum.photos/200',
  'https://i.pravatar.cc/200',
  'https://loremflickr.com/200/200',
  'http://placebeard.it/200/200',
  'http://placeimg.com/200/200',
];

export const getRandomImage = () => {
  return getRandomInArray(imageList);
}