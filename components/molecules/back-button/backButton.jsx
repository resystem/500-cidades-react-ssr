import React from 'react';
import PropTypes from 'prop-types'
import {
  BackContainer,
  BackIcon,
  Label,
} from './backButton.style';
import { useTranslation } from 'react-i18next';

/**
 * render the ActivistModal atom.
 */
const BackButton = ({
  handleClick, hideLabel,
}) => {
  const { t } = useTranslation();

  return (
    <BackContainer onClick={handleClick}>
      <BackIcon src="/icons/arrow_left.svg" />
      {hideLabel || <Label>{t('common.back')}</Label>}
    </BackContainer>
  );
}

BackButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hideLabel: PropTypes.bool,
};

BackButton.defaultProps = {
  hideLabel: false,
};

export default BackButton;
