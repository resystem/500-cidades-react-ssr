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
  if (!values.biography) {
    errors.biography = 'Biografia é obrigatório';
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
  if (!values.email) {
    errors.email = 'Biografia é obrigatório';
    hasError = true;
  }
  if (!values.whatsapp) {
    errors.whatsapp = 'Celular é obrigatório';
    hasError = true;
  }

  if (!values.birthDate) {
    errors.birthDate = 'Data de nascimento é obrigatório';
    hasError = true;
  }
  if (!values.category) {
    errors.category = 'Tipo de organização é obrigatório';
    hasError = true;
  }
  if (!values.occupation) {
    errors.occupation = 'Área de atuação é obrigatório';
    hasError = true;
  }
  if (!values.fieldsInterest) {
    errors.fieldsInterest = 'Áreas de Interesse é obrigatório';
    hasError = true;
  }
  if (!values.howToCollaborate) {
    errors.howToCollaborate = 'Como pode colaborar com a comunidade é obrigatório';
    hasError = true;
  }
  
  if (values.birthDate && strToDateDDMMYYYY(values.birthDate).toString() === 'Invalid Date') {
    errors.birthDate = 'Data de nascimento esta inválido';
    hasError = true;
  }

  console.log('🚀 ~ errors', errors);
  if (Object.keys(errors).length) setErrors(errors)
  else handleSubmit(mapValues(values));
};

const mapValues = (values) => ({
  ...values,
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
        // handleChange('street', placeResults.formatted_address.split(',')[0]);
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