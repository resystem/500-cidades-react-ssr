import React from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Wrapper,
  Image,
  Name,
  Type,
  Area,
  buttonCustomStyle,
} from './eventCard.modal.style';
import Button from '../../atoms/button/button'

/**
 * render the EventCard atom.
 */
const EventCard = ({
  imageUrl, date, area, type, isSubscribed, customStyle,
}) => (
  <Wrapper customStyle={customStyle}>
    <Image src={imageUrl} />
    <Container>
      <Name>{date}</Name>
      <Area>{area}</Area>
      <Type>{type}</Type>
      <Button
        customStyle={buttonCustomStyle(isSubscribed)}
      >
        {isSubscribed ? 'Me inscrevi' : 'Se inscrever'}
      </Button>
    </Container>
  </Wrapper>
);

EventCard.propTypes = {
  imageUrl: PropTypes.string,
  date: PropTypes.string,
  area: PropTypes.string,
  type: PropTypes.string,
  customStyle: PropTypes.string,
  isSubscribed: PropTypes.boolean,
};

EventCard.defaultProps = {
  imageUrl: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  date: '12 de agosto',
  area: 'Vivência',
  type: 'Dança circular',
  isSubscribed: false,
  customStyle: '',
};

export default EventCard;
