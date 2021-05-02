import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Wrapper,
  Icon,
  Header,
} from './expantionCard.modal.style';

/**
 * render the EventCard atom.
 */
const ExpantionCard = ({
  customStyle, title, content, onChange, id, show,
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (show !== showContent) onChange({ id, active: showContent })
  }, [showContent])
  useEffect(() => {
    if (show !== showContent) setShowContent(show)
  }, [show])
  return (
    <Wrapper customStyle={customStyle}>
      <Header onClick={() => setShowContent(!showContent)} showContent={showContent}>
        {title}
        <Icon src={showContent ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'} />
      </Header>
      <Container showContent={showContent}>
        {content}
      </Container>
    </Wrapper>
  );
}
ExpantionCard.propTypes = {
  imageUrl: PropTypes.string,
  date: PropTypes.string,
  area: PropTypes.string,
  type: PropTypes.string,
  customStyle: PropTypes.string,
  isSubscribed: PropTypes.boolean,
};

ExpantionCard.defaultProps = {
  imageUrl: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  date: '12 de agosto',
  area: 'Vivência',
  title: 'Dança circular',
  isSubscribed: false,
};

export default ExpantionCard;
