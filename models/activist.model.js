import { getRandomDeficiency } from "../dummies/deficiencies";
import { getRandomGender } from "../dummies/genders";
import { getRandomHobbie, hobbieList } from "../dummies/hobbies";
import { getRandomJob } from "../dummies/jobs";
import { getRandomLastName } from "../dummies/last_names";
import { getRandomImage, imageList } from "../dummies/avatar_image";
import { getRandomName } from "../dummies/names";
import { getRandomRace } from "../dummies/races";
import { songList } from "../dummies/songs";
import { foodList } from "../dummies/foods";
import { dreamList } from "../dummies/dreams";
import { bookList } from "../dummies/books";
import { cityList } from "../dummies/cities";
import { getRandomSexualOrientation } from "../dummies/sexual_orientation";
import { getRandomSign } from "../dummies/signs";
import { getRandomWebsite } from "../dummies/websites";
import { languagesList } from "../dummies/lenguages";
import { getNRandomStringsInArray, getRandomInArray } from "../utils/random.util";
import { dummyCoordinates } from "../dummies/locations";

export class Activist {
  id = '';
  name = '';
  last_name = '';
  social_name = '';
  hometown = {
    city: 'São Bernardo do Campo',
    state: 'SP',
  };
  facebook = 'https://facebook.com';
  twitter = 'https://twitter.com';
  instagram = 'https://instagram.com';
  tiktok = 'https://tiktok.com';
  job = ''
  biography = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat.'
  web_site = 'exemplo.com.br'
  email = 'exemplo@email.com'
  phone = '(21) 2999-9999'
  whatsapp = '(21) 2999-9999'
  gender = 'Mulher Cisgênero'
  sexual_orientation = 'Bissexual'
  color_race = 'Preta'
  deficiency = 'Deficiência Auditiva - Parcial'
  interests = []
  birth_date = '02 / 07 / 1992'
  sign = 'Câncer'
  languages = 'Português'
  main_language = 'Português'
  degree = 'Português'
  languages = ['Inglês', 'francês', 'alemão', 'espanhol', 'mandarim', 'polonês', 'swahili']
  address = {
    city: 'São Bernardo do Campo',
    state: 'SP',
  };
  images = [];
  degree = 'Farmacêutica'
  hobbies = []
  books = []
  songs = []
  foods = []
  movies = []
  series = []
  dreams = []
  favorite_places = []
  places_wanna_visit = []
  how_collaborate = []

  constructor(activist) {
    try {
      if (activist) this.mapActivist(activist);
    } catch (err) {
      console.error(err);
    }
  }

  generateActivist = () => {

    this.name = getRandomName();
    this.last_name = getRandomLastName();
    this.social_name = Math.random() > 0.5 ? `${getRandomName()} ${getRandomLastName()}` : '';
    this.facebook = 'https://facebook.com';
    this.twitter = 'https://twitter.com';
    this.instagram = 'https://instagram.com';
    this.biography = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat.';
    this.job = getRandomJob();
    this.web_site = getRandomWebsite();
    this.email = `${this.name}${this.last_name}@exemple.com`;
    this.phone = '(21) 98575-1456';
    this.whatsapp = '(21) 98575-1456';
    this.gender = getRandomGender();
    this.sexual_orientation = getRandomSexualOrientation()
    this.color_race = getRandomRace();
    this.deficiency = getRandomDeficiency();
    this.interests = getNRandomStringsInArray(hobbieList);
    this.sign = getRandomSign();
    this.languages = getNRandomStringsInArray(languagesList);
    this.degree = getRandomJob();
    this.hobbies = getNRandomStringsInArray(hobbieList);
    this.books = getNRandomStringsInArray(bookList);
    this.songs = getNRandomStringsInArray(songList);
    this.foods = getNRandomStringsInArray(foodList);
    this.movies = getNRandomStringsInArray(bookList);
    this.series = getNRandomStringsInArray(bookList);
    this.dreams = getNRandomStringsInArray(dreamList);
    this.favorite_places = getNRandomStringsInArray(cityList);
    this.places_wanna_visit = getNRandomStringsInArray(cityList);
    this.how_collaborate = getNRandomStringsInArray(dreamList);
    this.images = getNRandomStringsInArray(imageList);
    this.avatar_image = getRandomImage(imageList);
    this.geolocation = getRandomInArray(dummyCoordinates);
  }

  setId = (id) => {
    this.id = id;
  }

  mapActivist = (activist) => {
    this.name = activist.name;
    this.last_name = activist.last_name;
    this.social_name = activist.social_name;
    this.facebook = activist.facebook;
    this.twitter = activist.twitter;
    this.instagram = activist.instagram;
    this.tiktok = activist.tiktok;
    this.biography = activist.biography;
    this.job = activist.job;
    this.web_site = activist.web_site;
    this.email = activist.email;
    this.phone = activist.phone;
    this.whatsapp = activist.whatsapp;
    this.gender = activist.gender;
    this.sexual_orientation = activist.sexual_orientation;
    this.color_race = activist.color_race;
    this.deficiency = activist.deficiency;
    this.interests = activist.interests;
    this.birth_date = activist.birth_date;
    this.sign = activist.sign;
    this.languages = activist.languages;
    this.main_language = activist.main_language;
    this.degree = activist.degree;
    this.languages = activist.languages;
    this.images = activist.images;
    this.hobbies = activist.hobbies;
    this.books = activist.books;
    this.songs = activist.songs;
    this.foods = activist.foods;
    this.movies = activist.movies;
    this.series = activist.series;
    this.dreams = activist.dreams;
    this.favorite_places = activist.favorite_places;
    this.places_wanna_visit = activist.places_wanna_visit;
    this.how_collaborate = activist.how_collaborate;
    this.hometown = {
      city: activist.hometown.city,
      state: activist.hometown.state,
    };
    this.address = {
      city: activist.address.city,
      state: activist.address.state,
    };
  };
}