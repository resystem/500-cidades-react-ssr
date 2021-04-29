import React from 'react';
import PropTypes from 'prop-types'
import {
  FloatIconContainer,
  Icon,
  Wrapper,
  ListWrapper,
} from './floatIcon.style';
import Button from '../../atoms/button/button';

/**
 * render the ActivistModal atom.
 */
const FloatIcon = ({
}) => {
  console.log('🚀 ~ FloatIcon');

  return (
    <Wrapper>
      <FloatIconContainer>
        <Icon src="/icons/add_icon.svg" />
      </FloatIconContainer>
      <ListWrapper>
          <Button type="secondary">1</Button>
          <Button type="outline">2</Button>
          <Button type="outline">3</Button>
          <Button type="outline">4</Button>
      </ListWrapper>
    </Wrapper>
  );
}
FloatIcon.propTypes = {
};

FloatIcon.defaultProps = {
};

export default FloatIcon;
