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
import organizationCategoryList from './lists/organization-category/organizationCategory.pt-BR';

import activistForm from './components/activist-form/activistForm.pt-BR';
import activistModal from './components/activist-modal/activistModal.pt-BR';
import collectiveForm from './components/collective-form/collectiveForm.pt-BR';

export default {
  translations: {
    header: {
      map: 'Mapa',
      opportunities: 'Oportunidades',
      about: 'Sobre',
    },
    common: {
      back: 'Voltar'
    },
    logged_section: {
      profile: 'Meu Perfil',
      edit_profile: 'Editar Perfil',
      privacy_policy: 'Políticas de Privacidade',
      faq: 'Perguntas Frequentes',
      logout: 'Sair',
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
    organization_category_list: organizationCategoryList,
    
    activist_modal: activistModal,
    activist_form: activistForm,
    collective_form: collectiveForm,
  }
};
