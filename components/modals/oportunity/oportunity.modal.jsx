import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Container,
  Header,
  MenuIcon,
  OportunityImage,
  ShowMoreIcon,
  Line,
  SectionTitle,
  Description,
  DescriptionText,
  maxWidthCustomStyle,
  SocialMediaContainer,
  SocialMedia,
} from './oportunity.modal.style';
import About from './components/about/about';
import BackButton from '../../molecules/back-button/backButton';
import TagList from '../../molecules/taglist/taglist';
import Store from '../../../store/Store';

const BIOGRAPHY = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat."


const OportunityModal = ({
  oportunity
}) => {
  const state = useContext(Store)
  console.log('🚀 ~ state', state);
  if (!state.modals.oportunity) return null;

  return (
    <Wrapper>
      <Container>
        <Header>
          <BackButton handleClick={() => state.closeModal()} />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <OportunityImage src='https://source.unsplash.com/random/609x284' />
        <ShowMoreIcon src="/icons/dots_menu.svg" />
        <About
          name="Reunião da Akatsuki"
          datetime="20 de abril de 2021, 20h > 22h"
          link="Vídeo Conferência via Zoom"
        />

        <Line />

        <Description>
          <SectionTitle>Descrição</SectionTitle>
          <DescriptionText>{BIOGRAPHY}</DescriptionText>
        </Description>

        <SectionTitle>A oportunidade é</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />

        <SectionTitle>Contato</SectionTitle>
        <SocialMediaContainer>
          <SocialMedia
            onClick={() => window.open(facebook)}
            src="/icons/facebook.svg"
          />
          <SocialMedia
            onClick={() => window.open(instagram)}
            src="/icons/instagram.svg"
          />
          <SocialMedia
            onClick={() => window.open(twitter)}
            src="/icons/twitter.svg"
          />
          <SocialMedia
            onClick={() => window.open(tiktok)}
            src="/icons/tiktok.svg"
          />
        </SocialMediaContainer>



      </Container>
    </Wrapper>
)};

OportunityModal.propTypes = {
};

OportunityModal.defaultProps = {
};

export default OportunityModal;
