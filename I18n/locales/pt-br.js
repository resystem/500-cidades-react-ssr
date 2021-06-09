import jobList from './lists/job/job.pt-BR';
import sexOrientationList from './lists/sex-orientation/sexOrientation.pt-BR';
import disabilityList from './lists/disability/disability.pt-BR';
import countryList from './lists/country/country.pt-BR';
import languageList from './lists/language/language.pt-BR';
import birthSignList from './lists/birth-sign/birthSign.pt-BR';
import statesList from './lists/states/states.pt-BR';
import raceList from './lists/race/race.pt-BR';
import genderList from './lists/gender/gender.pt-BR';
import educationList from './lists/education/education.pt-BR';

export default {
  translations: {
    header: {
      map: 'Mapa',
      opportunities: 'Oportunidades',
      about: 'Sobre',
    },
    disability_list: disabilityList,
    sex_orientation_list: sexOrientationList,
    job_list: jobList,
    country_list: countryList,
    language_list: languageList,
    birth_sign_list: birthSignList,
    br_state_list: statesList,
    race_list: raceList,
    gender_list: genderList,
    education_list: educationList,
  }
};
