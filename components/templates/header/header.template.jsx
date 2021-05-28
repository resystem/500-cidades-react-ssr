import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper, Logo, loginButtonCustomStyle,
  signinButtonCustomStyle,
  List, Item, Left,
  ProfileImage, UserSection, ProfileName,
} from './header.style';
import Button from '../../atoms/button/button';
import LanguageDropdown from '../../organisms/language-dropdown/languageDropdown';
import Store from '../../../store/Store';

const renderUnloggedSection = (idaSDK) => (
  <UserSection>
    <Button handleClick={() => (idaSDK && idaSDK.signinWithPopup())} customStyle={loginButtonCustomStyle}>Entrar</Button>
    <Button handleClick={() => (idaSDK && idaSDK.signupWithPopup())} customStyle={signinButtonCustomStyle}>Crie sua conta</Button>
  </UserSection>
);

const renderMissingUser = (openModal) => (
  <UserSection>
    <Button handleClick={() => openModal('registerActivist')} customStyle={loginButtonCustomStyle}>Cadastrar usuário</Button>
  </UserSection>

);

const renderLoggedSection = (user, openModal) => (
  <UserSection onClick={() => openModal('editActivist')}>
    <ProfileName>{user.name}</ProfileName>
    <ProfileImage src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
  </UserSection>
);

/**
 * render the EventList template.
 */
const Header = ({
}) => {
  const { idaSDK, auth, user, openModal } = useContext(Store);
  const [selected, setSelected] = useState('map');
  return (
    <Wrapper>
      <Left>
        <LanguageDropdown />
        <List>
          <Item
            isSelected={selected === 'map'}
            onClick={() => setSelected('map')}
            id="map"
          >
            Mapa
          </Item>
          <Item
            isSelected={selected === 'oportunities'}
            onClick={() => setSelected('oportunities')}
            id="oportunities"
          >
            Oportunidades
          </Item>
          <Item
            isSelected={selected === 'about'}
            onClick={() => setSelected('about')}
            id="about"
          >
            Sobre
          </Item>
        </List>
      </Left>
      <Logo src="/icons/logo.svg"/>
      {!auth && renderUnloggedSection(idaSDK)}
      {(auth && !user) && renderMissingUser(openModal)}
      {(auth && user) && renderLoggedSection(user, openModal)}
    </Wrapper>
  );
}
Header.propTypes = {
  events: PropTypes.array.isRequired,
  customStyle: PropTypes.string,
  lines: PropTypes.number,
};

Header.defaultProps = {
  customStyle: '',
  lines: 2,
  columns: 3,
  events: [1,2,3],
};

export default Header;
