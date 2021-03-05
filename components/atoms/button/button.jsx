import React from 'react';
import PropTypes from 'prop-types'
import { ButtonComponent, Loading } from './button.style';

/**
 * render the Button atom.
 */
const Button = ({
  children, handleClick, customStyle,
  disabled, onFocus, onBlur, type,
  loading,
}) => (
  <ButtonComponent
    onClick={handleClick}
    customStyle={customStyle}
    disabled={loading || disabled}
    onFocus={onFocus}
    onBlur={onBlur}
    type={type}
    loading={loading}
  >
    {loading ? <Loading src="/icons/loading.svg" /> : children}
  </ButtonComponent>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Button.defaultProps = {
  customStyle: '',
  type: 'primary',
  disabled: false,
  onFocus: () => '',
  onBlur: () => '',
};

export default Button;
