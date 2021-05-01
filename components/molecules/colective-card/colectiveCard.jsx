import React from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper,
  Image,
  Label,
  InfoBox,
  Title,
  buttonCustomStyle,
} from './colectiveCard.style';
import Button from '../../atoms/button/button';

/**
 * render the Colective Modal Molecule.
 */
const ColectiveCard = ({
  handleClick, imgageSrc, title, location, isFollowing,
}) => (
  <Wrapper onClick={handleClick}>
    <Image src={imgageSrc} />
    <InfoBox>
      <Title>{title}</Title>
      <Label>{location}</Label>
      <Button
        customStyle={buttonCustomStyle}
        type={isFollowing ? 'secondary' : 'outline'}
      >
        {isFollowing ? 'Seguindo' : 'Seguir'}
      </Button>
    </InfoBox>
  </Wrapper>
);

ColectiveCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

ColectiveCard.defaultProps = {
  imgageSrc: 'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  title: 'Coletivo Sandra Rosa Madalena',
  location: 'São Paulo - SP',
  isFollowing: false,
};

export default ColectiveCard;
