import React from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper,
  Frame,
  Header,
  More,
  Title,
  CardsContainer,
  Image,
  ImageText,
} from './events.style';
import EventCard from '../../organisms/event-card/eventCard';

/**
 * render the ActivistModal atom.
 */
const EventList = ({
  events,
  customStyle,
  lines,
  showTitle,
  title,
  columns,
  handleClick,

}) => (
  <Wrapper customStyle={customStyle}>
    <Header>
      <Title>{title}</Title>
      <More>Ver mais</More>
    </Header>
    <CardsContainer columns={columns}>
      {
        events.slice(0, (columns * lines)).map((event) => (
          <EventCard customStyle="margin: 8px;" />
        ))
      }
    </CardsContainer>
  </Wrapper>
);

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  customStyle: PropTypes.string,
  lines: PropTypes.number,
};

EventList.defaultProps = {
  customStyle: '',
  lines: 2,
  columns: 3,
  events: [1,2,3],
};

export default EventList;
