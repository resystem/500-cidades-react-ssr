import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  LanguageButton, DropDownIcon,
  CurrentLanguageIcon,
  LanguagesList, LanguageItem,
  LanguageIcon, LanguageText,
} from './languageDropdown.style';

/**
 * render the LanguageDropdown organism.
 */
const LanguageDropdown = ({
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selected, setSelected] = useState('pt_BR');
  return (
    <LanguageButton onClick={() => setShowLanguages(!showLanguages)}>
      <CurrentLanguageIcon src={`/icons/${selected}.svg`} />
      <DropDownIcon src="/icons/arrow_drop_down.svg" />
      <LanguagesList show={showLanguages}>
        <LanguageItem onClick={() => setSelected('pt_BR')}>
          <LanguageIcon
            isSelected={selected === 'pt_BR'}
            src="/icons/pt_BR.svg"
          />
          <LanguageText>Português</LanguageText>
        </LanguageItem>
        <LanguageItem onClick={() => setSelected('es_ES')}>
          <LanguageIcon
            isSelected={selected === 'es_ES'}
            src="/icons/es_ES.svg"
          />
          <LanguageText>Español</LanguageText>
        </LanguageItem>
        <LanguageItem onClick={() => setSelected('EN_us')}>
          <LanguageIcon
            isSelected={selected === 'EN_us'}
            src="/icons/EN_us.svg"
          />
          <LanguageText>English</LanguageText>
        </LanguageItem>
      </LanguagesList>
    </LanguageButton>
  );
}
LanguageDropdown.propTypes = {
};

LanguageDropdown.defaultProps = {
};

export default LanguageDropdown;
