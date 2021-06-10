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
      <Label><Required>*</Required>{t('activist_form.legends.requiredAlert')}</Label>
      <InputGroup
        label={t('activist_form.labels.name')}
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
        label={t('activist_form.labels.socialName')}
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
      <Subtitle>{t('activist_form.subtitles.socialMedias')}</Subtitle>
      <InputGroup
        label={t('activist_form.labels.facebook')}
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
        label={t('activist_form.labels.instagram')}
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
        label={t('activist_form.labels.twitter')}
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
        label={t('activist_form.labels.tiktok')}
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
        label={t('activist_form.labels.biography')}
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
      <Subtitle>{t('activist_form.subtitles.contact')}</Subtitle>
      <InputGroup
        label={t('activist_form.labels.website')}
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
        label={t('activist_form.labels.email')}
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
        label={t('activist_form.labels.whatsapp')}
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
      <InputGroup
        label={t('activist_form.labels.phone')}
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
      <Subtitle>{t('activist_form.subtitles.personalInformation')}</Subtitle>
      <InputGroup
        label={t('activist_form.labels.gender')}
        customStyle="margin-top: 24px;"
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
        label={t('activist_form.labels.sexualOrientation')}
        customStyle="margin-top: 24px;"
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
        label={t('activist_form.labels.colorRace')}
        customStyle="margin-top: 24px;"
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
        label={t('activist_form.labels.deficiency')}
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
        label={t('activist_form.labels.birthDate')}
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
        label={t('activist_form.labels.sign')}
        customStyle="margin-top: 24px;"
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
        label={t('activist_form.labels.education')}
        customStyle="margin-top: 24px;"
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
        label={t('activist_form.labels.job')}
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
        label={t('activist_form.labels.mainLanguage')}
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
        label={t('activist_form.labels.languages')}
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
      {/* <Subtitle>{t('activist_form.subtitles.nacionality')}</Subtitle>
      <InputGroup
        label={t('activist_form.labels.homecountry')}
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
        label={t('activist_form.labels.homestate')}
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
        label={t('activist_form.labels.hometown')}
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
      </InputGroup> */}
      <Line />
      <Subtitle>{t('activist_form.subtitles.map')}</Subtitle>
      <InputGroup
        label={t('activist_form.labels.zipcode')}
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
        label={t('activist_form.labels.street')}
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
        label={t('activist_form.labels.number')}
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
        label={t('activist_form.labels.complement')}
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
        label={t('activist_form.labels.district')}
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
        label={t('activist_form.labels.city')}
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
        label={t('activist_form.labels.state')}
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
        label={t('activist_form.labels.country')}
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
        label={t('activist_form.labels.lat')}
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
        label={t('activist_form.labels.lng')}
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
      <Subtitle>{t('activist_form.subtitles.cultureHost')}</Subtitle>
      <Label>{t('activist_form.legends.cultureHost')}</Label>
      <Checkbox>{t('activist_form.labels.isAHostPoint')}</Checkbox>
      <Line />
      <Subtitle>{t('activist_form.subtitles.interestFields')}</Subtitle>
      <Label>{t('activist_form.legends.fillTip')}</Label>
      <InputGroup
        label={t('activist_form.labels.hobbies')}
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
        label={t('activist_form.labels.books')}
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
        label={t('activist_form.labels.songs')}
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
        label={t('activist_form.labels.foods')}
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
        label={t('activist_form.labels.movies')}
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
        label={t('activist_form.labels.series')}
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
        label={t('activist_form.labels.dreams')}
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
        label={t('activist_form.labels.favoritePlaces')}
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
        label={t('activist_form.labels.placesWannaVisit')}
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
        label={t('activist_form.labels.howToCollaborate')}
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
