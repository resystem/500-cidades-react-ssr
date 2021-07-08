import React from 'react';
import PropTypes from 'prop-types'
import {
  CharacteristicContainer,
  CharacteristicLabel,
  CharacteristicValue,
} from './characteristic.style';

/**
 * render the Characteristic atom.
 */
const Characteristic = ({
  label, value, hide
}) => {
  console.log('🚀 ~ value', value);
  if (hide) return null
  return (
    <CharacteristicContainer>
      <CharacteristicLabel>
        {label}
      </CharacteristicLabel>
      <CharacteristicValue>
        {value}
      </CharacteristicValue>
    </CharacteristicContainer>
  );
}

Characteristic.propTypes = {
};

Characteristic.defaultProps = {
};

export default Characteristic;
