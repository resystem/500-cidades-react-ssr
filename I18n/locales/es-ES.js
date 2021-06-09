import jobList from './lists/job/job.es-ES';
import sexOrientationList from './lists/sex-orientation/sexOrientation.es-ES';
import disabilityList from './lists/disability/disability.es-ES';
import countryList from './lists/country/country.es-ES';
import languageList from './lists/language/language.es-ES';
import birthSignList from './lists/birth-sign/birthSign.es-ES';
import statesList from './lists/states/states.es-ES';
import raceList from './lists/race/race.es-ES';
import genderList from './lists/gender/gender.es-ES';
import educationList from './lists/education/education.es-ES';

export default {
  translations: {
    header: {
      map: 'Mapa',
      opportunities: 'Oportunidades',
      about: 'Sobre',
    },
    disability_list: disabilityList,
    sex_orientation_list: sexOrientationList,
    job_lis: jobList,
    country_list: countryList,
    language_list: languageList,
    birth_sign_list: birthSignList,
    br_state_list: statesList,
    race_list: raceList,
    gender_list: genderList,
    education_list: educationList,
  }
}
