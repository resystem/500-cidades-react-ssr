import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  FloatIconContainer,
  Icon,
  ItemIcon,
  Wrapper,
  ListWrapper,
  buttoonCustomStyleHightlight,
  buttoonCustomStyle,
  buttoonCustomPlaceStyle,
} from './floatIcon.style';
import Button from '../../atoms/button/button';

const toggleOptions = (e, setShowList, showList) => {
  e.stopPropagation();
  setShowList(!showList);
}

/**
 * render the ActivistModal atom.
 */
const FloatIcon = ({
}) => {
  const [showList, setShowList] = useState(false);
  return (
    <Wrapper>
      <FloatIconContainer showList={showList} onClick={(e) => toggleOptions(e, setShowList, showList)}>
        <Icon src={showList ? "icons/white_X.svg" : "/icons/add_icon.svg"} />
      </FloatIconContainer>
      <ListWrapper showList={showList} onClick={(e) => e.stopPropagation()}>
          <Button customStyle={buttoonCustomStyleHightlight} type="secondary">
            <ItemIcon src="/icons/event.svg" />
              Eventos
          </Button>
          <Button customStyle={buttoonCustomStyle} type="outline">
            <ItemIcon src="/icons/people.svg" />
            Pessoas
          </Button>
          <Button customStyle={buttoonCustomStyle} type="outline">
            <ItemIcon src="/icons/space_icon.svg" />
            Espaços
          </Button>
          <Button customStyle={buttoonCustomPlaceStyle} type="outline">
            <ItemIcon src="/icons/place_icon.svg" />
            Lugares
          </Button>
      </ListWrapper>
    </Wrapper>
  );
}
FloatIcon.propTypes = {
};

FloatIcon.defaultProps = {
};

export default FloatIcon;
