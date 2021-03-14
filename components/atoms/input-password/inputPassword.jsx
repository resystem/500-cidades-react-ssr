import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Icon, InputComponent, InputWrapper } from './inputPassword.style';


/**
 * render the Input atom.
 */
 const InputPassword = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, success, error,
  filled
}) => {
  const [showP, setShowP] = useState(false);
  return (
    <InputWrapper
      filled={filled}
      success={success}
      error={error}
      customStyle={customStyle}
    >
      <InputComponent
        onChange={handleChange}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        success={success}
        error={error}
        placeholder={placeholder}
        filled={filled}
        type={showP ? 'text' : 'password'}
        autocomplete="off"
        name={placeholder}
      >
      </InputComponent>
      <Icon
        src={showP ? '/icons/visibility-off.svg' : '/icons/visibility.svg'}
        onClick={() => setShowP(!showP)}
      />
    </InputWrapper>
  );
}
InputPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  success: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  filled: PropTypes.bool,
};

InputPassword.defaultProps = {
  customStyle: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default InputPassword;