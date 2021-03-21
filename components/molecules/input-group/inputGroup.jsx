import React from 'react';
import PropTypes from 'prop-types'
import { Wrapper, RequiredSign, Label, Error } from './inputGrounp.style';

/**
 * render the Input Group Molecule.
 */
const InputGroup = ({
  children, label, error, isRequired, customStyle
}) => (
  <Wrapper customStyle={customStyle}>
    {label ? (<Label>{label} <RequiredSign>{`${isRequired ? '*' : ''}`}</RequiredSign></Label>) : null}
    {children}
    {error ? (<Error>{error}</Error>) : null}
  </Wrapper>
);

InputGroup.propTypes = { 
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  customStyle: PropTypes.string,
  isRequired: PropTypes.bool,
};

InputGroup.defaultProps = {
  customStyle: '',
  label: '',
  error: '',
  isRequired: false,
};

export default InputGroup;
