import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  AboutWrapper,
  ActionWrapper, Container,
  customStyleCancelButton, customStyleSaveButton,
} from './handleActivist.modal.style';
import ActivistForm from '../../organisms/activist-form/activistForm';
import Button from '../../atoms/button/button';
import { getAddress, submitProxy } from './handleActivist.controller';
import UploadAvatar from '../../atoms/upload-avatar/uploadAvatar';
import { dateToStrDDMMYYYY } from '../../../utils/date.util';

/**
 * render the HandleActivist atom.
 */
const HandleActivistForm = ({
  handleSubmit, handleCancel, activist, isLoading,
}) => {
  const [name, setName] = useState(activist.name || '');
  const [socialName, setSocialName] = useState(activist.social_name || '');
  const [facebook, setFacebook] = useState(activist.facebook || '');
  const [instagram, setInstagram] = useState(activist.instagram || '');
  const [twitter, setTwitter] = useState(activist.twitter || '');
  const [tiktok, setTiktok] = useState(activist.tiktok || '');
  const [biography, setBiography] = useState(activist.biography || '');
  const [email, setEmail] = useState(activist.email || '');
  const [whatsapp, setWhatsapp] = useState(activist.whatsapp || '');

  const [zipcode, setZipcode] = useState(activist.address?.zipcode || '');
  const [lastZipcode, setLastZipcode] = useState(activist.address?.zipcode || '');
  const [street, setStreet] = useState(activist.address?.street || '');
  const [number, setNumber] = useState(activist.address?.number || '');
  const [complement, setComplement] = useState(activist.address?.complement);
  const [district, setDistrict] = useState(activist.address?.district || '');
  const [city, setCity] = useState(activist.address?.city || '');
  const [state, setState] = useState(activist.address?.state || '');
  const [gender, setGender] = useState(activist.gender || '');
  const [sexualOrientation, setSexualOrientation] = useState(activist.sexual_orientation || '');
  const [colorRace, setColorRace] = useState(activist.color_race || '');
  const [deficiency, setDeficiency] = useState(activist.deficiency || '');
  const [sign, setSign] = useState(activist.birth_sign || '');
  const [mainLanguage, setMainLanguage] = useState(activist.main_language || '');
  const [languages, setLanguages] = useState(activist.languages || []);
  const [phone, setPhone] = useState(activist.phone || '');
  const [website, setWebsite] = useState(activist.web_site || '');
  const [birthDate, setBirthDate] = useState(dateToStrDDMMYYYY(new Date(+activist.birth_date)) || '');
  const [hometown, setHometown] = useState(activist.hometown || '');
  const [homestate, setHomestate] = useState(activist.homestate || '');
  const [homecountry, setHomecountry] = useState(activist.homecountry || '');
  const [job, setJob] = useState(activist.job || '');
  const [country, setCountry] = useState(activist.address?.country || '');
  const [hobbies, setHobbies] = useState(activist.hobbies?.join(', ') || '');
  const [books, setBooks] = useState(activist.books?.join(', ') || '');
  const [songs, setSongs] = useState(activist.songs?.join(', ') || '');
  const [foods, setFoods] = useState(activist.foods?.join(', ') || '');
  const [movies, setMovies] = useState(activist.movies?.join(', ') || '');
  const [series, setSeries] = useState(activist.series?.join(', ') || '');
  const [dreams, setDreams] = useState(activist.dreams?.join(', ') || '');
  const [favoritePlaces, setFavoritePlaces] = useState(activist.favorite_places?.join(', ') || '');
  const [placesWannaVisit, setPlacesWannaVisit] = useState(activist.places_wanna_visit?.join(', ') || '');
  const [howToCollaborate, setHowToCollaborate] = useState(activist.how_to_collaborate?.join(', ') || '');
  const [geometry, setGeometry] = useState(activist.address?.geolocation || {});
  const [education, setEducation] = useState(activist.education || '');
  const [lat, setLat] = useState(activist.address?.lat || null);
  const [lng, setLng] = useState(activist.address?.lng || null);
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    const handlers = {
      name: (payload) => setName(payload),
      socialName: (payload) => setSocialName(payload),
      facebook: (payload) => setFacebook(payload),
      instagram: (payload) => setInstagram(payload),
      twitter: (payload) => setTwitter(payload),
      tiktok: (payload) => setTiktok(payload),
      biography: (payload) => setBiography(payload),
      email: (payload) => setEmail(payload),
      whatsapp: (payload) => setWhatsapp(payload),
      zipcode: (payload) => setZipcode(payload),
      street: (payload) => setStreet(payload),
      number: (payload) => setNumber(payload),
      complement: (payload) => setComplement(payload),
      district: (payload) => setDistrict(payload),
      city: (payload) => setCity(payload),
      state: (payload) => setState(payload),
      education: (payload) => setEducation(payload),
      birthDate: (payload) => setBirthDate(payload),
      country: (payload) => setCountry(payload),
      books: (payload) => setBooks(payload),
      gender: (payload) => setGender(payload),
      books: (payload) => setBooks(payload),
      songs: (payload) => setSongs(payload),
      foods: (payload) => setFoods(payload),
      movies: (payload) => setMovies(payload),
      series: (payload) => setSeries(payload),
      dreams: (payload) => setDreams(payload),
      website: (payload) => setWebsite(payload),
      favoritePlaces: (payload) => setFavoritePlaces(payload),
      placesWannaVisit: (payload) => setPlacesWannaVisit(payload),
      howToCollaborate: (payload) => setHowToCollaborate(payload),
      job: (payload) => setJob(payload),
      geometry: (payload) => setGeometry(payload),
      sexualOrientation: (payload) => setSexualOrientation(payload),
      phone: (payload) => setPhone(payload),
      colorRace: (payload) => setColorRace(payload),
      hometown: (payload) => setHometown(payload),
      homestate: (payload) => setHomestate(payload),
      hobbies: (payload) => setHobbies(payload),
      homecountry: (payload) => setHomecountry(payload),
      mainLanguage: (payload) => setMainLanguage(payload),
      languages: (payload) => {
        const l = [ ...languages.filter(l => l !== payload)];
        if(l.length === languages.length) l.push(payload);
        setLanguages(l);
      },
      sign: (payload) => setSign(payload),
      deficiency: (payload) => setDeficiency(payload),
      lat: (payload) => setLat(payload),
      lng: (payload) => setLng(payload),
      profileImage: (payload) => setProfileImage(payload),
    };
    errors[id] = '';
    handlers[id](value);
  };

  const values = {
    name,
    socialName,
    facebook,
    instagram,
    twitter,
    gender,
    tiktok,
    education,
    biography,
    sexualOrientation,
    colorRace,
    hobbies,
    deficiency,
    sign,
    mainLanguage,
    languages,
    books,
    songs,
    foods,
    movies,
    series,
    dreams,
    favoritePlaces,
    placesWannaVisit,
    howToCollaborate,
    job,
    email,
    whatsapp,
    profileImage,
    hometown,
    homestate,
    homecountry,
    phone,
    website,
    birthDate,

    country,
    zipcode,
    street,
    number,
    complement,
    geometry,
    lat,
    lng,
    district,
    city,
    state,
  };
  
  useEffect(() => {
    getAddress(zipcode, handleChange, lastZipcode, setLastZipcode);
  }, [zipcode])
  useEffect(() => {
    if (activist.profile_image?.single_size?.mimified) {
      setProfileImage({
        url: activist.profile_image.single_size.mimified
      });
    }
  }, [activist])

  return (
    <Container>
      <AboutWrapper>
        <UploadAvatar src={profileImage} handleChange={handleChange} />
      </AboutWrapper>
      <ActivistForm
        handleChange={handleChange}
        values={values}
        errors={errors}
      />
      <ActionWrapper>
        <Button
          loading={isLoading}
          handleClick={handleCancel}
          customStyle={customStyleCancelButton}
        >Cancelar</Button>
        <Button
          loading={isLoading}
          handleClick={() => submitProxy(values, handleSubmit, setErrors)}
          customStyle={customStyleSaveButton}
        >Salvar</Button>
      </ActionWrapper>
    </Container>
  );
}

HandleActivistForm.propTypes = {
};

HandleActivistForm.defaultProps = {
  activist: {},
  title: 'Criar Perfil',
  handleSubmit: (activist) => console.log('handleSubmit'),
  handleCancel: () => console.log('CANCEL'),
};

export default HandleActivistForm;
