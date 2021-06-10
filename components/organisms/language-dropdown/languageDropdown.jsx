import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {
  LanguageButton, DropDownIcon,
  CurrentLanguageIcon,
  LanguagesList, LanguageItem,
  LanguageIcon, LanguageText,
} from './languageDropdown.style';
import { useTranslation } from 'react-i18next';

/**
 * render the LanguageDropdown organism.
 */
const LanguageDropdown = ({
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState('pt-BR');
  useEffect(() => {
    i18n.changeLanguage(selected)
  }, selected)
  return (
    <LanguageButton onClick={() => setShowLanguages(!showLanguages)}>
      <CurrentLanguageIcon src={`/icons/${selected}.svg`} />
      <DropDownIcon src="/icons/arrow_drop_down.svg" />
      <LanguagesList show={showLanguages}>
        <LanguageItem onClick={() => setSelected('pt-BR')}>
          <LanguageIcon
            isSelected={selected === 'pt-BR'}
            src="/icons/pt-BR.svg"
          />
          <LanguageText>Português</LanguageText>
        </LanguageItem>
        <LanguageItem onClick={() => setSelected('es-ES')}>
          <LanguageIcon
            isSelected={selected === 'es-ES'}
            src="/icons/es-ES.svg"
          />
          <LanguageText>Español</LanguageText>
        </LanguageItem>
        <LanguageItem onClick={() => setSelected('en-US')}>
          <LanguageIcon
            isSelected={selected === 'en-US'}
            src="/icons/en-US.svg"
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
