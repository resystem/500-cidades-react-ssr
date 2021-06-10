import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import VMasker from 'vanilla-masker';
import {
  Container,
  Header,
  Wrapper,
  Label,
  MenuIcon,
  PageTitle,
  Required,
  Form,
  Subtitle,
  Line,
  AboutWrapper,
  inputCustomStyle
} from './activistForm.modal.style';
import InputGroup from '../../molecules/input-group/inputGroup';
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/text-area/textArea';
import Checkbox from '../../molecules/checkbox/checkbox';
import Dropdown from '../../molecules/dropdown/dropdown';
import UploadAvatar from '../../atoms/upload-avatar/uploadAvatar';
import { extractNumbers } from '../../../utils/numbers.utils';
import Store from '../../../store/Store';
import { useTranslation } from 'react-i18next';
import TagList from '../../molecules/taglist/taglist';

/**
 * render the ActivistForm atom.
 */
const ActivistForm = ({
  handleChange, values, errors,
}) => {
  const { assets } = useContext(Store);
  const { t } = useTranslation();

  return (
    <Form>
      <Label><Required>*</Required> Campos de preenchimento obrigatório.</Label>
      <InputGroup
        label="Nome completo"
        customStyle="margin-top: 32px;"
        error={errors.name}
        isRequired
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          handleChange={({ target }) => handleChange('name', target.value)}
          value={values.name}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      <InputGroup
        label="Nome social"
        error={errors.socialName}
        customStyle="margin-top: 24px;"
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          handleChange={({ target }) => handleChange('socialName', target.value)}
          value={values.socialName}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <Line />
      <Subtitle>Redes sociais</Subtitle>
      <InputGroup
        label="Facebook"
        customStyle="margin-top: 24px;"
        error={errors.facebook}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          handleChange={({ target }) => handleChange('facebook', target.value)}
          value={values.facebook}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      <InputGroup
        label="Instagram"
        customStyle="margin-top: 24px;"
        error={errors.instagram}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          handleChange={({ target }) => handleChange('instagram', target.value)}
          value={values.instagram}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      <InputGroup
        label="Twitter"
        customStyle="margin-top: 24px;"
        error={errors.twitter}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          handleChange={({ target }) => handleChange('twitter', target.value)}
          value={values.twitter}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      <InputGroup
        label="Tiktok"
        customStyle="margin-top: 24px;"
        error={errors.tiktok}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          handleChange={({ target }) => handleChange('tiktok', target.value)}
          value={values.tiktok}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      <Line />
      <InputGroup
        label="Biografia"
        customStyle="margin-top: 24px;"
        error={errors.biography}
        isRequired
        customLabelStyle="font-size: 0.875em;"
        >
        <TextArea
          handleChange={({ target }) => handleChange('biography', target.value)}
          value={values.biography}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      <Subtitle>Contato</Subtitle>
      <InputGroup
        label="Site"
        customStyle="margin-top: 24px;"
        error={errors.website}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="http://seusite.com.br"
          handleChange={({ target }) => handleChange('website', target.value)}
          value={values.website}
        />
      </InputGroup>
      <InputGroup
        label="E-mail"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.email}
      >
        <Input
          customStyle="width: 100%;"
          placeholder="seu@email.com.br"
          handleChange={({ target }) => handleChange('email', target.value)}
          value={values.email}
        />
      </InputGroup>
      <InputGroup
        label="Telefone fixo"
        customStyle="margin-top: 24px;"
        error={errors.phone}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="(99) 99999 9999"
          handleChange={({ target }) => handleChange('phone', extractNumbers(target.value))}
          value={VMasker.toPattern(values.phone, '(99) 9999-9999')}
        />
      </InputGroup>
      <InputGroup
        label="Celular / WhatsApp"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.whatsapp}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          handleChange={({ target }) => handleChange('whatsapp', extractNumbers(target.value))}
          value={VMasker.toPattern(values.whatsapp, '(99) 99999-9999')}
          placeholder="(99) 99999 9999"
        />
      </InputGroup>
      <Subtitle>Informações pessoais</Subtitle>
      <InputGroup
        label="Identidade de gênero"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.gender}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.gender_list?.map(o => ({
            name: t(`gender_list.${o}`),
            id: o,
          }))}
          value={values.gender ? t(`gender_list.${values.gender}`) : ''}
          handleChange={({ target }) => handleChange('gender', target.value)}
        />
      </InputGroup>
      <InputGroup
        label="Orientação sexual"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.sexualOrientation}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.sex_orientation_list?.map(o => ({
            name: t(`sex_orientation_list.${o}`),
            id: o,
          }))}
          value={values.sexualOrientation ? t(`sex_orientation_list.${values.sexualOrientation}`) : ''}
          handleChange={({ target }) => handleChange('sexualOrientation', target.value)}
        />
      </InputGroup>
      <InputGroup
        label="Cor e raça"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.colorRace}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.race_list?.map(o => ({
            name: t(`race_list.${o}`),
            id: o,
          }))}
          value={values.colorRace ? t(`race_list.${values.colorRace}`) : ''}
          handleChange={({ target }) => handleChange('colorRace', target.value)}
        />
      </InputGroup>
      <InputGroup
        label="Pessoa com deficiência"
        customStyle="margin-top: 24px;"
        error={errors.deficiency}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          options={assets?.disability_list?.map(o => ({
            name: t(`disability_list.${o}`),
            id: o,
          }))}
          placeholder="Texto"
          handleChange={({ target }) => handleChange('deficiency', target.value)}
          value={values.deficiency ? t(`disability_list.${values.deficiency}`) : ''}
        />
      </InputGroup>
      <InputGroup
        label="Data de nascimento"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.birthDate}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="DD/MM/AAAA"
          handleChange={({ target }) => handleChange('birthDate', extractNumbers(target.value))}
          value={VMasker.toPattern(values.birthDate, '99/99/9999')}
        />
      </InputGroup>
      <InputGroup
        label="Signo"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.sign}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          options={assets?.birth_sign_list?.map(o => ({
            name: t(`birth_sign_list.${o}`),
            id: o,
          }))}
          placeholder="Texto"
          handleChange={({ target }) => handleChange('sign', target.value)}
          value={values.sign ? t(`birth_sign_list.${values.sign}`) : ''}
        />
      </InputGroup>
      <InputGroup
        label="Profissão"
        customStyle="margin-top: 24px;"
        error={errors.job}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.job_list?.map(o => ({
            name: t(`job_list.${o}`),
            id: o,
          }))}
          handleChange={({ target }) => handleChange('job', target.value)}
          value={values.job ? t(`job_list.${values.job}`) : ''}
        />
      </InputGroup>
      <InputGroup
        label="Idioma principal"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.mainLanguage}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          handleChange={({ target }) => handleChange('mainLanguage', target.value)}
          options={assets?.language_list?.map(o => ({
            name: t(`language_list.${o}`),
            id: o,
          }))}
          placeholder="Texto"
          value={values.mainLanguage ? t(`language_list.${values.mainLanguage}`) : ''}
        />
      </InputGroup>
      <InputGroup
        label="Outros idiomas que fala"
        customStyle="margin-top: 24px;"
        error={errors.languages}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          isList
          options={assets?.language_list?.map(o => ({
            name: t(`language_list.${o}`),
            id: o,
          }))}
          handleChange={({ target }) => handleChange('languages', target.value)}
          // value={values.languages ? t(`language_list.${values.languages}`) : ''}
        />
        <TagList
          tags={values.languages ? values.languages.map(l => t(`language_list.${l}`)) : []}
        />
      </InputGroup>
      <Subtitle>Nacionalidade</Subtitle>
      <InputGroup
        label="País"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.homecountry}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.country_list?.map(o => ({
            name: t(`country_list.${o}`),
            id: o,
          }))}
          handleChange={({ target }) => handleChange('homecountry', target.value)}
          value={values.homecountry ? t(`country_list.${values.homecountry}`) : ''}
        />
      </InputGroup>
      <InputGroup
        label="Estado/província"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.homestate}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.br_state_list?.map(o => ({
            name: t(`br_state_list.${o}`),
            id: o,
          }))}
          handleChange={({ target }) => handleChange('homestate', target.value)}
          value={values.homestate ? t(`br_state_list.${values.homestate}`) : ''}
        />
      </InputGroup>
      <InputGroup
        label="Cidade natal"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.hometown}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('hometown', target.value)}
          value={values.hometown}
        />
      </InputGroup>
      <Subtitle>Áreas de interesse</Subtitle>
      <Label>Separe as palavras-chave com vírgula</Label>
      {/* <InputGroup
        label="Cidade natal"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup> */}
      <Line />
      <Subtitle>Mapa</Subtitle>
      <InputGroup
        label="CEP"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.zipcode}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('zipcode', extractNumbers(target.value))}
          value={VMasker.toPattern(values.zipcode, '99999-999')}
          />
      </InputGroup>
      <InputGroup
        label="Logradouro"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.street}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('street', target.value)}
          value={values.street}
          />
      </InputGroup>
      <InputGroup
        label="Número"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.number}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('number', target.value)}
          value={values.number}
          />
      </InputGroup>
      <InputGroup
        label="Complemento"
        customStyle="margin-top: 24px;"
        customLabelStyle="font-size: 0.875em;"
        error={errors.complement}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('complement', target.value)}
          value={values.complement}
          />
      </InputGroup>
      <InputGroup
        label="Bairro"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.district}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('district', target.value)}
          value={values.district}
          />
      </InputGroup>
      <InputGroup
        label="Cidade"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.city}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('city', target.value)}
          value={values.city}
          />
      </InputGroup>
      <InputGroup
        label="Estado"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.state}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('state', target.value)}
          value={values.state}
          />
      </InputGroup>
      <InputGroup
        label="Pais"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.country}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('country', target.value)}
          value={values.country}
          />
      </InputGroup>
      <InputGroup
        label="Latitude"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.lat}
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('lat', target.value)}
          value={values.lat}
          />
      </InputGroup>
      <InputGroup
        label="Longitude"
        customStyle="margin-top: 24px;"
        isRequired
        customLabelStyle="font-size: 0.875em;"
        error={errors.lng}
      >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('lng', target.value)}
          value={values.lng}
          />
      </InputGroup>
      <Checkbox>Pode ser ponto de hospedagem</Checkbox>
      <Line />
      <Subtitle>Áreas de interesse</Subtitle>
      <Label>Separe as palavras-chave com vírgula</Label>
      <InputGroup
        label="Formação"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.education}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          options={assets?.education_list?.map(o => ({
            name: t(`education_list.${o}`),
            id: o,
          }))}
          value={values.education ? t(`education_list.${values.education}`) : ''}
          customStyle="width: 100%;"
          handleChange={({ target }) => handleChange('education', target.value)}
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Hobbies"
        customStyle="margin-top: 24px;"
        error={errors.hobbies}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('hobbies', target.value)}
          value={values.hobbies}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Livros"
        customStyle="margin-top: 24px;"
        error={errors.books}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('books', target.value)}
          value={values.books}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Música"
        customStyle="margin-top: 24px;"
        error={errors.songs}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('songs', target.value)}
          value={values.songs}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Comidas"
        customStyle="margin-top: 24px;"
        error={errors.foods}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('foods', target.value)}
          value={values.foods}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Filmes"
        customStyle="margin-top: 24px;"
        error={errors.movies}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('movies', target.value)}
          value={values.movies}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Series"
        customStyle="margin-top: 24px;"
        error={errors.series}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('series', target.value)}
          value={values.series}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Sonhos"
        customStyle="margin-top: 24px;"
        error={errors.dreams}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('dreams', target.value)}
          value={values.dreams}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Lugares favoritos"
        customStyle="margin-top: 24px;"
        error={errors.favoritePlaces}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('favoritePlaces', target.value)}
          value={values.favoritePlaces}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Lugares que gostaria de conhecer"
        customStyle="margin-top: 24px;"
        error={errors.placesWannaVisit}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('placesWannaVisit', target.value)}
          value={values.placesWannaVisit}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Como pode colaborar com a comunidade?"
        customStyle="margin-top: 24px;"
        error={errors.howToCollaborate}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('howToCollaborate', target.value)}
          value={values.howToCollaborate}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup> 
    </Form>
  );
}


ActivistForm.propTypes = {
};

ActivistForm.defaultProps = {
  handleChange: (id, value) => console.info('id, value: ', id, value),
  values: {
    name: '',
    socialName: '',
    facebook: '',
    instagram: '',
    twitter: '',
    tiktok: '',
    brografy: '',
  }
};

export default ActivistForm;
