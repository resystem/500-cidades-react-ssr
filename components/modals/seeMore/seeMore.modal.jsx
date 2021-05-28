import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Wrapper,
  Label,
  MenuIcon,
  List,
  Card,
} from './seeMore.modal.style';
import BackButton from '../../molecules/back-button/backButton';
import Store from '../../../store/Store';
import { dummyPlaces, dummyColectives, seeMoreTypes } from './seeMore.model';
import PlaceCard from '../../organisms/place-card/placeCard';
import FollowCard from '../../molecules/follow-card/followCard';
import OportunitiesList from '../../templates/oportunities-list/oportunitiesList.template';


const renderSpaces = (spaces) => spaces.map((space) => (
  <Card>
    <FollowCard
      handleClick={() => 'salve'}
      imgageSrc={space.image}
      title={space.name}
      isHorizontalPhoto={true}
      location={space.locationLabel}
      isFollowing={space.isFollowing}
    />
  </Card>
));

const renderOportunities = (informations) => (
  <OportunitiesList informations={informations} customStyle={"width: 100%; max-width: 100%;"} />
);

const renderActivist = (activists) => activists.map((activist) => (
  <Card>
    <FollowCard
      handleClick={() => 'salve'}
      imgageSrc={activist.image}
      title={activist.name}
      hasBorderRadius={true}
      location={activist.locationLabel}
      isFollowing={activist.isFollowing}
    />
  </Card>
))

const renderColectives = (colectives) => colectives.map((colective) => (
  <Card>
    <FollowCard
      handleClick={() => 'salve'}
      imgageSrc={colective.image}
      title={colective.name}
      location={colective.locationLabel}
      isFollowing={colective.isFollowing}
    />
  </Card>
))

const renderPlaces = (places) => places.map((place) => (
  <Card>
    <PlaceCard
      imageUrl={place.image}
      placeName={place.name}
      location={place.locationLabel}
    />
  </Card>
))

/**
 * render the SeeMoreModal atom.
 */
const SeeMoreModal = ({
  activist,
}) => {

  const state = useContext(Store)
  const info = state.modalInfo || {
    type: 'oportunity',
    cards: dummyColectives,
  };
  const isPlace = info.type === 'place';
  const isColective = info.type === 'colective';
  const isActivist = info.type === 'activist';
  const isSpace = info.type === 'space';
  const isOportunity = info.type === 'oportunity';
  if (!state.modals.seeMore) return null;

  return (
    <Wrapper>
      <Container>
        <Header>
          <BackButton hideLabel={true} handleClick={() => state.closeModal()} />
          <Label>{seeMoreTypes[info.type].label}</Label>
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <List isOportunity={isOportunity}>
          {!isPlace || renderPlaces(info.cards)}
          {!isColective || renderColectives(info.cards)}
          {!isActivist || renderActivist(info.cards)}
          {!isSpace || renderSpaces(info.cards)}
          {!isOportunity || renderOportunities(info)}
        </List>
      </Container>
    </Wrapper>
  );
}

SeeMoreModal.propTypes = {
};

SeeMoreModal.defaultProps = {
};

export default SeeMoreModal;
