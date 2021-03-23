import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { InputComponent, InputWrapper } from './inputCode.style';
import { extractNumbers } from '../../../utils/numbers.utils';



/**
 * render the Input atom.
 */
const InputCode = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, success, error,
  filled, length, id,
}) => {
  const [value, setValue] = useState('');
  const localHandleChange = (v, i) => {
    const newValues = value.split('')
    const myId = i.replace(`${id}-`, '');
    newValues[myId] = extractNumbers(v.trim()) || ' ';
    let myLength = newValues.join('').length;
    if (myLength < length) {
      for (myLength += 1; myLength < length; myLength++) {
        newValues[myLength] = ' ';
      }
      
    }
    setValue(newValues.join('').slice(0,4));
    const el = document.querySelector(`#${id}-${(!extractNumbers(v.trim())) ? ((+myId - 1)) : (+myId + 1)}`);
    if (el) el.focus();
  }
  
  useEffect(() => {
    const arr = [];
    for (let index = 0; index < length; index++) {
      arr.push(' ');
    }
    setValue(arr.join(''))
  }, []);
  useEffect(() => {
    handleChange({ target: { id, value }});
  }, [value])


  return (
    <InputWrapper
      customStyle={customStyle}
    >
      {
        value.split('').map((v, i) => (
          <InputComponent
            onChange={({ target }) => localHandleChange(target.value, target.id)}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            success={success}
            id={`${id}-${i}`}
            value={v}
            error={error}
            placeholder={'0'}
            filled={filled}
            type={'tel'}
            maxLength={2}
            autocomplete="off"
          />
        ))
      }
    </InputWrapper>
  );
}

InputCode.propTypes = {
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

InputCode.defaultProps = {
  customStyle: '',
  disabled: false,
  success: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default InputCode;