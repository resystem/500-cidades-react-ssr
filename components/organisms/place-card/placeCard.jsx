import React from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper,
  Image,
  Container,
  Name,
  Location
} from './placeCard.style';


/**
 * render the PlaceCard organism.
 */
const PlaceCard = ({
  imageUrl, placeName, location, customStyle
}) => (
  <Wrapper customStyle={customStyle}>
    <Image src={imageUrl} />
    <Container>
      <Name>{placeName}</Name>
      <Location>{location}</Location>
    </Container>
  </Wrapper>
)

PlaceCard.propTypes = {
  imageUrl: PropTypes.string,
  placeName: PropTypes.string,
  location: PropTypes.string,
  customStyle: PropTypes.string,
};

PlaceCard.defaultProps = {
  imageUrl: 'https://source.unsplash.com/random/640x480',
  placeName: 'Batalha da Aldeia',
  location: 'São Paulo - SP'
}

export default PlaceCard;
