import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
  Icon,
} from './checkbox.style';

function Checkbox({
  children,
  handleClick,
  customStyle,
  disabled,
  onFocus,
  onBlur,
}) {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }
  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox checked={checked} onClick={handleCheckboxChange} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Text checked={checked}> {children} </Text>
    </CheckboxContainer>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Checkbox.defaultProps = {
  customStyle: '',
  type: 'primary',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default Checkbox;
