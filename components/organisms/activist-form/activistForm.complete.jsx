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
  handleChange, values,
}) => {
  const { closeModal, modals, modalInfo, activists } = useContext(Store);
  return (
    <Form>
      <Label><Required>*</Required> Campos de preenchimento obrigatório.</Label>
      <InputGroup
        label="Nome completo"
        customStyle="margin-top: 32px;"
        isRequired
        error={errors.}
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
        isRequired
        error={errors.}
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
        isRequired
        error={errors.}
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
        isRequired
        error={errors.}
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
        isRequired
        error={errors.}
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
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <TextArea
          handleChange={({ target }) => handleChange('brografy', target.value)}
          value={values.brografy}
          customStyle="width: 100%;"
          placeholder="Texto"
        />
      </InputGroup>
      {/* <Subtitle>Galeria</Subtitle>
      <Subtitle>Lugares</Subtitle>
      <Subtitle>Coletivos</Subtitle>
      <Subtitle>Espaços</Subtitle>
      <Subtitle>Oportunidades</Subtitle>
      <Line /> */}
      <Subtitle>Contato</Subtitle>
     {/*  <InputGroup
        label="Site"
        customStyle="margin-top: 24px;"
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="http://seusite.com.br"
          handleChange={({ target }) => handleChange('website', target.value)}
          value={values.website}
        />
      </InputGroup> */}
      <InputGroup
        label="E-mail"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="seu@email.com.br"
          handleChange={({ target }) => handleChange('email', target.value)}
          value={values.email}
        />
      </InputGroup>
   {/*    <InputGroup
        label="Telefone fixo"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="(99) 99999 9999"
          handleChange={({ target }) => handleChange('phone', target.value)}
          value={values.phone}
        />
      </InputGroup> */}
      <InputGroup
        label="Celular / WhatsApp"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
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
      {/* <InputGroup
        label="Identidade de gênero"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('gender', target.value)}
          value={values.gender}
        />
      </InputGroup>
      <InputGroup
        label="Orientação sexual"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('sexualOrientation', target.value)}
          value={values.sexualOrientation}
        />
      </InputGroup>
      <InputGroup
        label="Cor e raça"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('colorRace', target.value)}
          value={values.colorRace}
        />
      </InputGroup>
      <InputGroup
        label="Pessoa com deficiência"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('deficiency', target.value)}
          value={values.deficiency}
        />
      </InputGroup>
      <InputGroup
        label="Data de nascimento"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('birthDate', target.value)}
          value={values.birthDate}
        />
      </InputGroup>
      <InputGroup
        label="Signo"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('sign', target.value)}
          value={values.sign}
        />
      </InputGroup>
      <InputGroup
        label="Profissão"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('job', target.value)}
          value={values.job}
        />
      </InputGroup>
      <InputGroup
        label="Idioma principal"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          handleChange={({ target }) => handleChange('mainLanguage', target.value)}
          value={values.mainLanguage}
          placeholder="Texto"
        />
      </InputGroup>
      <InputGroup
        label="Outros idiomas que fala"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
      >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('languages', target.value)}
          value={values.languages}
        />
      </InputGroup>
      <Subtitle>Nacionalidade</Subtitle>
      <InputGroup
        label="País"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('country', target.value)}
          value={values.country}
        />
      </InputGroup>
      <InputGroup
        label="Estado/província"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('state', target.value)}
          value={values.state}
        />
      </InputGroup>
      <InputGroup
        label="Cidade natal"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Dropdown
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('city', target.value)}
          value={values.city}
        />
      </InputGroup>
      <Subtitle>Áreas de interesse</Subtitle>
      <Label>Separe as palavras-chave com vírgula</Label>
      <InputGroup
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
      </InputGroup>
      <Line />
      */}
      <Subtitle>Mapa</Subtitle>
      <InputGroup
        label="CEP"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
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
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
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
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
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
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
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
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
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
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
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
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('state', target.value)}
          value={values.state}
          />
      </InputGroup>
      <InputGroup
        label="pais"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.country}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          handleChange={({ target }) => handleChange('country', target.value)}
          value={values.country}
          />
      </InputGroup>
      {/*
      <Checkbox>Pode ser ponto de hospedagem</Checkbox>
      <Line />
      <Subtitle>Áreas de interesse</Subtitle>
      <Label>Separe as palavras-chave com vírgula</Label>
      <InputGroup
        label="Formação"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Hobbies *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Livros *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Música *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Comidas *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Filmes *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Series *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Sonhos *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Lugares favoritos *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Lugares que gostaria de conhecer *"
        customStyle="margin-top: 24px;"
        isRequired
        error={errors.}
        customLabelStyle="font-size: 0.875em;"
        >
        <Input
          customStyle="width: 100%;"
          placeholder="Texto"
          />
      </InputGroup>
      <InputGroup
        label="Como pode colaborar com a comunidade? *"
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
