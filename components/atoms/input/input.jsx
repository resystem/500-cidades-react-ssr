import React from 'react';
import PropTypes from 'prop-types'
import { InputComponent } from './input.style';


/**
 * render the Input atom.
 */
 const Input = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, success, error,
  filled
}) => (
  <InputComponent
    onChange={handleChange}
    customStyle={customStyle}
    disabled={disabled}
    onFocus={onFocus}
    onBlur={onBlur}
    success={success}
    error={error}
    placeholder={placeholder}
    filled={filled}
  >
  </InputComponent>
);

Input.propTypes = {
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

Input.defaultProps = {
  customStyle: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default Input;