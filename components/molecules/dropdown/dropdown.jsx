import React from 'react';
import PropTypes from 'prop-types'
import { DropdownComponent, DropdownItem } from './dropdown.style';


/**
 * render the Dropdown molecule.
 */
 const Dropdown = ({
  handleChange, customStyle,
  disabled, onFocus, onBlur,
  placeholder, error, filled,
  options
}) => (
  <DropdownComponent
    onChange={handleChange}
    customStyle={customStyle}
    disabled={disabled}
    onFocus={onFocus}
    onBlur={onBlur}
    error={error}
    placeholder={placeholder}
    filled={filled}
    options={options}
  >
    {/* {options.map((option) => { */}
      <DropdownItem label="Texto" />
      <DropdownItem label="Texto 2" />
    {/* })} */}
  </DropdownComponent>
);

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  filled: PropTypes.bool,
//   options: PropTypes.object({
//       label: PropTypes.string,
//       id: PropTypes.string
//     })
};

Dropdown.defaultProps = {
  customStyle: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default Dropdown;