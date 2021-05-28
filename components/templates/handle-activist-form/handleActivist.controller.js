const getMapsProperty = (placeResults, id) => {
  const component = placeResults.address_components.find(i => i.types.includes(id));
  return component ? component.long_name : '';
}

export const submitProxy = (values, handleSubmit, setErrors) => {
console.log('🚀 ~ values', values);
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

  console.log('🚀 ~ errors', errors);
  if (Object.keys(errors).length) setErrors(errors)
  else handleSubmit(values);
};

export const getAddress = async (zipcodeInput, handleChange) => {
  if (zipcodeInput.length !== 8) return null;
    try {
      const zipcodeAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodeInput}&language=pt&key=${process.env.AUTOCOMPLETE_KEY}`);
      const result = await zipcodeAddress.json();
      if (result.results.length > 0) {
        const placeResults = result.results[0];
        handleChange('city', getMapsProperty(placeResults, "administrative_area_level_2"));
        handleChange('state', getMapsProperty(placeResults, "administrative_area_level_1"));
        handleChange('street', getMapsProperty(placeResults, "sublocality"));
        handleChange('country', getMapsProperty(placeResults, "country"));
        handleChange('district', getMapsProperty(placeResults, "sublocality"));
        handleChange('geometry', placeResults.geometry.bounds);
        handleChange('lat', placeResults.geometry.location.lat);
        handleChange('lng', placeResults.geometry.location.lng);
      } else {
        throw new Error("Couldn't find zipcode")
      }
    } catch (error) {
      return console.error(error);
    }
  }