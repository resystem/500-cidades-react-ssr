import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper, Logo, UnLoggedSection, loginButtonCustomStyle,
  signinButtonCustomStyle,
  List, Item,
  Left,
} from './header.style';
import Button from '../../atoms/button/button';
import LanguageDropdown from '../../organisms/language-dropdown/languageDropdown';

/**
 * render the EventList template.
 */
const Header = ({
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
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
      <UnLoggedSection>
        <Button customStyle={loginButtonCustomStyle}>Entrar</Button>
        <Button customStyle={signinButtonCustomStyle}>Crie sua conta</Button>
      </UnLoggedSection>
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
