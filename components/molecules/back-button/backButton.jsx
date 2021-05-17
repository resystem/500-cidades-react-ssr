import React from 'react';
import PropTypes from 'prop-types'
import {
  BackContainer,
  BackIcon,
  Label,
} from './backButton.style';

/**
 * render the ActivistModal atom.
 */
const BackButton = ({
  handleClick, hideLabel,
}) => (
  <BackContainer onClick={handleClick}>
    <BackIcon src="/icons/arrow_left.svg" />
    {hideLabel || <Label>Voltar</Label>}
  </BackContainer>
);

BackButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hideLabel: PropTypes.bool,
};

BackButton.defaultProps = {
  hideLabel: false,
};

export default BackButton;
