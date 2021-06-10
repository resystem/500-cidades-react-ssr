import { strToDateDDMMYYYY } from "../../../utils/date.util";

const getMapsProperty = (placeResults, id) => {
  const component = placeResults.address_components.find(i => i.types.includes(id));
  return component ? component.long_name : '';
}

export const submitProxy = (values, handleSubmit, setErrors) => {
  const errors = {};
  let hasError = false;

  if (!values.name) {
    errors.name = 'Noome é obrigatório';
    hasError = true;
  }
  // if (!values.brography) {
  //   errors.brografy = 'Biografia é obrigatório';
  //   hasError = true;
  // }
  if (!values.email) {
    errors.email = 'Biografia é obrigatório';
    hasError = true;
  }
  if (!values.whatsapp) {
    errors.whatsapp = 'Celular é obrigatório';
    hasError = true;
  }
  if (!values.zipcode) {
    errors.zipcode = 'CEP é obrigatório';
    hasError = true;
  }
  if (!values.street) {
    errors.street = 'Rua é obrigatório';
    hasError = true;
  }
  if (!values.geometry) {
    errors.zipcode = 'CEP inválido';
    hasError = true;
  }
  if (!values.number) {
    errors.number = 'Numero é obrigatório';
    hasError = true;
  }
  // if (!values.complement) {
  //   errors.complement = 'Complemento é obrigatório';
  //   hasError = true;
  // }
  if (!values.district) {
    errors.district = 'Bairro é obrigatório';
    hasError = true;
  }
  if (!values.city) {
    errors.city = 'Cidade é obrigatório';
    hasError = true;
  }
  if (!values.state) {
    errors.state = 'Estado é obrigatório';
    hasError = true;
  }
  if (!values.country) {
    errors.country = 'País é obrigatório';
    hasError = true;
  }
  if (!values.lat) {
    errors.lat = 'Latitude é obrigatório';
    hasError = true;
  }
  if (!values.lng) {
    errors.lng = 'Longitude é obrigatório';
    hasError = true;
  }
  if (!values.homecountry) {
    errors.homecountry = 'País de origem é obrigatório';
    hasError = true;
  }
  
  if (!values.homestate) {
    errors.homestate = 'Estado de origem é obrigatório';
    hasError = true;
  }
  
  if (!values.hometown) {
    errors.hometown = 'Cidade Natal é obrigatório';
    hasError = true;
  }
  if (!values.mainLanguage) {
    errors.mainLanguage = 'Idioma principal é obrigatório';
    hasError = true;
  }
  if (!values.birthDate) {
    errors.birthDate = 'Data de nascimento é obrigatório';
    hasError = true;
  }
  
  if (values.birthDate && strToDateDDMMYYYY(values.birthDate).toString() === 'Invalid Date') {
    errors.birthDate = 'Data de nascimento esta inválido';
    hasError = true;
  }

  if (Object.keys(errors).length) setErrors(errors)
  else handleSubmit(mapValues(values));
};

const mapValues = (values) => ({
  ...values,
  books: values.books.split(',').map(a => a.trim()),
  dreams: values.dreams.split(',').map(a => a.trim()),
  favoritePlaces: values.favoritePlaces.split(',').map(a => a.trim()),
  foods: values.foods.split(',').map(a => a.trim()),
  hobbies: values.hobbies.split(',').map(a => a.trim()),
  howToCollaborate: values.howToCollaborate.split(',').map(a => a.trim()),
  movies: values.movies.split(',').map(a => a.trim()),
  placesWannaVisit: values.placesWannaVisit.split(',').map(a => a.trim()),
  series: values.series.split(',').map(a => a.trim()),
  songs: values.songs.split(',').map(a => a.trim()),
});

export const getAddress = async (zipcodeInput, handleChange, lastZipcode, setLastZipcode) => {
  if (zipcodeInput.length !== 8) return null;
  
  if (zipcodeInput === lastZipcode) return null;
    try {
      const zipcodeAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodeInput}&language=pt&key=${process.env.AUTOCOMPLETE_KEY}`);
      const result = await zipcodeAddress.json();
      if (result.results.length > 0) {
        const placeResults = result.results[0];
        handleChange('city', getMapsProperty(placeResults, "administrative_area_level_2"));
        handleChange('state', getMapsProperty(placeResults, "administrative_area_level_1"));
        handleChange('street', placeResults.formatted_address.split(',')[0]);
        handleChange('country', getMapsProperty(placeResults, "country"));
        handleChange('district', getMapsProperty(placeResults, "sublocality"));
        handleChange('geometry', placeResults.geometry.bounds);
        handleChange('lat', placeResults.geometry.location.lat);
        handleChange('lng', placeResults.geometry.location.lng);
        setLastZipcode(zipcodeInput)
      } else {
        throw new Error("Couldn't find zipcode")
      }
    } catch (error) {
      return console.error(error);
    }
  }