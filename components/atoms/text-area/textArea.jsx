import React from 'react';
import PropTypes from 'prop-types'
import { TextAreaComponent } from './textArea.style';


/**
 * render the Input atom.
 */
 const TextArea = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, success, error,
  filled, rows
}) => (
  <TextAreaComponent
    onChange={handleChange}
    customStyle={customStyle}
    disabled={disabled}
    onFocus={onFocus}
    onBlur={onBlur}
    success={success}
    error={error}
    placeholder={placeholder}
    filled={filled}
    rows={rows}
  >
  </TextAreaComponent>
);

TextArea.propTypes = {
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

TextArea.defaultProps = {
  customStyle: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
  rows: 5
};

export default TextArea;