import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  AboutWrapper,
  ActionWrapper, Container,
  customStyleCancelButton, customStyleSaveButton,
} from './handleCollective.modal.style';
import ActivistForm from '../../organisms/activist-form/activistForm';
import Button from '../../atoms/button/button';
import { getAddress, submitProxy } from './handleCollective.controller';
import UploadAvatar from '../../atoms/upload-avatar/uploadAvatar';
import { dateToStrDDMMYYYY } from '../../../utils/date.util';
import CollectiveForm from '../../organisms/collective-form/collectiveForm';

/**
 * render the HandleCollective atom.
 */
const HandleCollectiveForm = ({
  handleSubmit, handleCancel, activist, isLoading,
}) => {
  const [name, setName] = useState(activist.name || '');
  const [biography, setBiography] = useState(activist.biography || '');
  const [hasAddress, setHasAddress] = useState(activist.has_address || true);
  
  const [zipcode, setZipcode] = useState(activist.address?.zipcode || '');
  const [street, setStreet] = useState(activist.address?.street || '');
  const [number, setNumber] = useState(activist.address?.number || '');
  const [complement, setComplement] = useState(activist.address?.complement);
  const [district, setDistrict] = useState(activist.address?.district || '');
  const [city, setCity] = useState(activist.address?.city || '');
  const [state, setState] = useState(activist.address?.state || '');
  const [country, setCountry] = useState(activist.address?.country || '');
  const [lat, setLat] = useState(activist.address?.lat || null);
  const [lng, setLng] = useState(activist.address?.lng || null);
  const [isHostPoint, setIsHostPoint] = useState(activist.is_host_point || false);
  const [lastZipcode, setLastZipcode] = useState(activist.address?.zipcode || '');
  
  const [facebook, setFacebook] = useState(activist.facebook || '');
  const [instagram, setInstagram] = useState(activist.instagram || '');
  const [twitter, setTwitter] = useState(activist.twitter || '');
  const [tiktok, setTiktok] = useState(activist.tiktok || '');

  const [website, setWebsite] = useState(activist.web_site || '');
  const [email, setEmail] = useState(activist.email || '');
  const [whatsapp, setWhatsapp] = useState(activist.whatsapp || '');
  const [phone, setPhone] = useState(activist.phone || '');
  const [birthDate, setBirthDate] = useState(dateToStrDDMMYYYY(new Date(+activist.birth_date)) || '');
  
  const [category, setCategory] = useState(activist.category || '');
  const [fieldsInterest, setFieldsInterest] = useState(activist.fields_interest || '');
  const [occupation, setOccupation] = useState(activist.occupation || '');
  const [profileImage, setProfileImage] = useState(null);
  const [geometry, setGeometry] = useState(activist.address?.geolocation || {});
  const [howToCollaborate, setHowToCollaborate] = useState(activist.how_to_collaborate?.join(', ') || '');
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    const handlers = {
      name: (payload) => setName(payload),
      biography: (payload) => setBiography(payload),
      hasAddress: (payload) => setHasAddress(payload),
      
      zipcode: (payload) => setZipcode(payload),
      street: (payload) => setStreet(payload),
      number: (payload) => setNumber(payload),
      complement: (payload) => setComplement(payload),
      district: (payload) => setDistrict(payload),
      city: (payload) => setCity(payload),
      state: (payload) => setState(payload),
      country: (payload) => setCountry(payload),
      lat: (payload) => setLat(payload),
      lng: (payload) => setLng(payload),
      isHostPoint: (payload) => setIsHostPoint(payload),

      facebook: (payload) => setFacebook(payload),
      instagram: (payload) => setInstagram(payload),
      twitter: (payload) => setTwitter(payload),
      tiktok: (payload) => setTiktok(payload),
      
      website: (payload) => setWebsite(payload),
      email: (payload) => setEmail(payload),
      whatsapp: (payload) => setWhatsapp(payload),
      phone: (payload) => setPhone(payload),
      birthDate: (payload) => setBirthDate(payload),
      geometry: (payload) => setGeometry(payload),
      
      category: (payload) => setCategory(payload),
      fieldsInterest: (payload) => setFieldsInterest(payload),
      occupation: (payload) => setOccupation(payload),
      profileImage: (payload) => setProfileImage(payload),
      howToCollaborate: (payload) => setHowToCollaborate(payload),
    };
    errors[id] = '';
    handlers[id](value);
  };

  const values = {
    name,
    biography,
    hasAddress,
    zipcode,
    street,
    number,
    complement,
    district,
    city,
    state,
    country,
    lat,
    lng,
    isHostPoint,
    facebook,
    instagram,
    twitter,
    tiktok,
    website,
    email,
    whatsapp,
    phone,
    birthDate,
    category,
    geometry,
    fieldsInterest,
    occupation,
    profileImage,
    howToCollaborate,
  };
  
  useEffect(() => {
    getAddress(zipcode, handleChange, lastZipcode, setLastZipcode);
  }, [zipcode])
  useEffect(() => {
    if (activist.profile_image?.single_size?.mimified) {
      setProfileImage({
        url: activist.profile_image.single_size.mimified
      });
    }
  }, [activist])

  return (
    <Container>
      <AboutWrapper>
        <UploadAvatar type="square" src={profileImage} handleChange={handleChange} />
      </AboutWrapper>
      <CollectiveForm
        handleChange={handleChange}
        values={values}
        errors={errors}
      />
      <ActionWrapper>
        <Button
          loading={isLoading}
          handleClick={handleCancel}
          customStyle={customStyleCancelButton}
        >Cancelar</Button>
        <Button
          loading={isLoading}
          handleClick={() => submitProxy(values, handleSubmit, setErrors)}
          customStyle={customStyleSaveButton}
        >Salvar</Button>
      </ActionWrapper>
    </Container>
  );
}

HandleCollectiveForm.propTypes = {
};

HandleCollectiveForm.defaultProps = {
  activist: {},
  title: 'Criar Perfil',
  handleSubmit: (activist) => console.log('handleSubmit'),
  handleCancel: () => console.log('CANCEL'),
};

export default HandleCollectiveForm;
