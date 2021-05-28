import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Counter, TextAreaComponent, Container } from './textArea.style';
import { useEffect } from 'react';


/**
 * render the Input atom.
 */
 const TextArea = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, success, error,
  filled, rows, value
}) => {
  const [valueInput, setValueInput] = useState(value || '');
  useEffect(() => {
    if (handleChange) handleChange({ target: { value: valueInput }});
  }, [value]);
  return (
    <Container>
      <TextAreaComponent
        customStyle={customStyle}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        success={success}
        onChange={({ target }) => setValueInput(target.value)}
        error={error}
        value={valueInput}
        placeholder={placeholder}
        filled={filled}
        rows={rows}
      >
      </TextAreaComponent>
      <Counter>{`${valueInput.length} / 500`}</Counter>
    </Container>
  );
}

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