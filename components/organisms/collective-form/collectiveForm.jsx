import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import VMasker from 'vanilla-masker';
import {
  Label,
  Required,
  Form,
  Subtitle,
  Line,
} from './collectiveForm.modal.style';
import InputGroup from '../../molecules/input-group/inputGroup';
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/text-area/textArea';
import Checkbox from '../../molecules/checkbox/checkbox';
import Dropdown from '../../molecules/dropdown/dropdown';
import { extractNumbers } from '../../../utils/numbers.utils';
import Store from '../../../store/Store';
import { useTranslation } from 'react-i18next';
import TagList from '../../molecules/taglist/taglist';

/**
 * render the CollectiveForm atom.
 */
const CollectiveForm = ({
  handleChange, values, errors,
}) => {
  const { assets } = useContext(Store);
  console.log('🚀 ~ assets', assets);
  const { t } = useTranslation();

  return (
    <Form>
      <Label><Required>*</Required>{t('activist_form.legends.requiredAlert')}</Label>
      <InputGroup
        label={t('collective_form.labels.name')}
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
      <Line />
      <Subtitle>{t('collective_form.labels.hasAddress')}</Subtitle>
      <Checkbox
        value={values.hasAddress}
        handleClick={({ target }) => handleChange('hasAddress', !values.hasAddress)}
      >
        {t('collective_form.labels.yes')}
      </Checkbox>
      <Checkbox
        value={!values.hasAddress}
        handleClick={({ target }) => handleChange('hasAddress', !values.hasAddress)}
      >
        {t('collective_form.labels.no')}
      </Checkbox>
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
          handleChange={({ target }) => handleChange('lat', +target.value)}
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
          handleChange={({ target }) => handleChange('lng', +target.value)}
          value={values.lng}
          />
      </InputGroup>
      <Subtitle>{t('activist_form.subtitles.cultureHost')}</Subtitle>
      <Label>{t('activist_form.legends.cultureHost')}</Label>
      <Checkbox
        value={values.isHostPoint}
        handleClick={({ target }) => handleChange('isHostPoint', !values.isHostPoint)}
      >
        {t('activist_form.labels.isAHostPoint')}
      </Checkbox>
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
      <Line />
      <Subtitle>{t('activist_form.subtitles.interestFields')}</Subtitle>
      <Label>{t('activist_form.legends.fillTip')}</Label>
      <InputGroup
        label={t('collective_form.labels.category')}
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.category}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          options={assets?.organization_category_list?.map(o => ({
            name: t(`organization_category_list.${o}`),
            id: o,
          }))}
          value={values.category ? t(`organization_category_list.${values.category}`) : ''}
          handleChange={({ target }) => handleChange('category', target.value)}
        />
      </InputGroup>
      <InputGroup
        label={t('collective_form.labels.occupation')}
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.occupation}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('occupation', target.value)}
          value={values.occupation}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label={t('collective_form.labels.fieldsInterest')}
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.fieldsInterest}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          handleChange={({ target }) => handleChange('fieldsInterest', target.value)}
          value={values.fieldsInterest}
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label={t('activist_form.labels.howToCollaborate')}
        customStyle="margin-top: 24px;"
        isRequired
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


CollectiveForm.propTypes = {
};

CollectiveForm.defaultProps = {
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

export default CollectiveForm;
