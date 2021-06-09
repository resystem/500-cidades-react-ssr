import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { DropdownContainer, DropdownHeader, DropdownListContainer, DropdownList, ListItem, DropdownArrow } from './dropdown.style';
import { useEffect } from 'react';
import Input from '../../atoms/input/input';
import { normalizeString } from '../../../utils/string.util';

/**
 * render the Dropdown molecule.
 */
 function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState(props.isList ? '' : props.value);
    const [list, setList] = useState(props.options);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
      if (props.handleChange) props.handleChange({ target: { value, id: props.id }});
      setIsOpen(false);
      setFilter(props.isList ? '' : props.value);
    };

    useEffect(() => {
      setFilter(props.value);
    }, [props.value]);

    useEffect(() => {
      const normalizedFilter = normalizeString(filter);
      const regex = new RegExp(`${normalizedFilter}`, 'gi');

      const newList = props.options.filter((i) =>
        regex.test(normalizeString(i.name)) || regex.test(normalizeString(i.id))
      );
      
      setList(newList);
    }, [filter]);

    const options = props.options;

    return(
      <DropdownContainer
        customStyle={props.customStyle}
        filled={props.filled}
        error={props.error}
      >
        <DropdownHeader >
          <Input
            customStyle="width: 100%;"
            value={filter}
            onFocus={() => setIsOpen(true)}
            placeholder={props.placeholder}
            handleChange={({ target }) => setFilter(target.value)}
          />
          {isOpen && <DropdownArrow onClick={toggling} src="/icons/arrow_dropup.svg" />}
          {!isOpen && <DropdownArrow onClick={toggling} src="/icons/arrow_dropdown.svg" />}
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {list.map(option => (
                <ListItem onClick={onOptionClicked(option.id)} key={Math.random()}>
                  {option.name}
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
    { name: "Sem opções disponíveis", id: 'na'},
    { name: "Sem opções disponíveis", id: 'na'},
    { name: "Sem opções disponíveis", id: 'na'},
  ],
  customStyle: '',
  id: '',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default Dropdown;