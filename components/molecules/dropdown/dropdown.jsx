import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { DropdownContainer, DropdownHeader, DropdownListContainer, DropdownList, ListItem, DropdownArrow } from './dropdown.style';
import { useEffect } from 'react';

/**
 * render the Dropdown molecule.
 */
 function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
    };

    useEffect(() => {
      if (props.handleChange) props.handleChange({ target: { value: selectedOption, id: props.id }});
    }, [selectedOption])

    const options = props.options;

    return(
      <DropdownContainer
        onChange={props.handleChange}
        customStyle={props.customStyle}
        disabled={props.disabled}
        filled={props.filled}
        error={props.error}
        onClick={toggling}
      >
        <DropdownHeader >
          {selectedOption || props.placeholder}
          {isOpen ?
            <DropdownArrow src="/icons/arrow_dropup.svg" />
            :
            <DropdownArrow src="/icons/arrow_dropdown.svg" />
          }
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    )
    };

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  filled: PropTypes.bool,
};

Dropdown.defaultProps = {
  options: [
    "Sem opções disponíveis",
    "Sem opções disponíveis",
    "Sem opções disponíveis",
  ],
  customStyle: '',
  id: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default Dropdown;