import React, { useContext } from 'react';
import PropTypes from 'prop-types'
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
import BackButton from '../../molecules/back-button/backButton';
import Store from '../../../store/Store';
import InputGroup from '../../molecules/input-group/inputGroup';
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/text-area/textArea';
import Checkbox from '../../molecules/checkbox/checkbox';
import Dropdown from '../../molecules/dropdown/dropdown';
import UploadAvatar from '../../atoms/upload-avatar/uploadAvatar';

/**
 * render the ActivistForm atom.
 */
const ActivistForm = ({
  handleChange, values, errors,
}) => {
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
        isRequired
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
        isRequired
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
        isRequired
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
        isRequired
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
        label="Celular / WhatsApp"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.whatsapp}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          handleChange={({ target }) => handleChange('whatsapp', target.value)}
          value={values.whatsapp}
          placeholder="(99) 99999 9999"
        />
      </InputGroup>
      <Subtitle>Informações pessoais</Subtitle>
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
          handleChange={({ target }) => handleChange('zipcode', target.value)}
          value={values.zipcode}
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
        isRequired
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
