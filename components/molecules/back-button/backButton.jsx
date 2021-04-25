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
  handleClick,
}) => (
  <BackContainer onClick={handleClick}>
    <BackIcon src="/icons/arrow_left.svg" />
    <Label>Voltar</Label>
  </BackContainer>
);

BackButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

BackButton.defaultProps = {
};

export default BackButton;
