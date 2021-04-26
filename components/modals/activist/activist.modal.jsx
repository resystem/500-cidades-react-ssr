import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import {
  AboutContainer,
  Container,
  Header,
  Wrapper,
  BackContainer,
  BackIcon,
  Label,
  MenuIcon,
  AboutWrapper,
  ProfileImage,
  AgentDetails,
  Name,
  Location,
  Type,
  AgentIcon,
  AgentLabel,
  SocialMedia,
  SectionTitle,
  BiographyText,
  Contact,
  Biography,
  Line,
  sectionTitleCustomStyle,
  sectionSmallTitleCustomStyle,
  maxWidthCustomStyle
} from './activist.modal.style';
import BackButton from '../../molecules/back-button/backButton';
import About from './components/about/about';
import ContactInfo from '../../molecules/contact-info/contact';
import Characteristic from '../../molecules/characteristic/characteristic';
import Galery from '../../templates/galery/galery.template';
import EventList from '../../templates/event-list/events.template';
import TagList from '../../molecules/taglist/taglist';
import Store from '../../../store/Store';

const BIOGRAPHY = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat."

/**
 * render the ActivistModal atom.
 */
const ActivistModal = ({
  activist,
}) => {
  const state = useContext(Store)
  console.log('🚀 ~ state', state);
  if (!state.modals.activist) return null;
  return (
    <Wrapper>
      <Container>
        <Header>
          <BackButton handleClick={() => state.closeModal()} />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <About
          name="Marielle Ramires"
          location="São Bernardo do Campo - SP"
          facebook="https://facebook.com"
          twitter="https://twitter.com"
          instagram="https://instagram.com"
          tiktok="https://tiktok.com"
        />
        <Biography>
          <SectionTitle>Biografia</SectionTitle>
          <BiographyText>{BIOGRAPHY}</BiographyText>
        </Biography>
        <Contact>
          <SectionTitle>Informações pessoais</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text="exemplo.com.br"
          />
          <ContactInfo
            iconPath="/icons/mail.svg"
            text="exemplo@email.com"
          />
          <ContactInfo
            iconPath="/icons/phone.svg"
            text="(21) 2999-9999"
          />
          <ContactInfo
            iconPath="/icons/whatsapp.svg"
            text="(21) 2999-9999"
          />
        </Contact>
        <Characteristic
          label="Identidade de Gênero"
          value="Mulher Cisgênero"
        />
        <Characteristic
          label="Orientação Sexual"
          value="Bissexual"
        />
        <Characteristic
          label="Cor e Raça"
          value="Preta"
        />
        <Characteristic
          label="Pessoa com Deficiência"
          value="Deficiência Auditiva - Parcial"
        />
        <Characteristic
          label="Data de nascimento"
          value="02 / 07 / 1992"
        />
        <Characteristic
          label="Signo"
          value="Câncer"
        />
        <Characteristic
          label="Profissão"
          value="Ourives"
        />
        <Characteristic
          label="Idioma principal"
          value="Português"
        />
        <Characteristic
          label="Outros idiomas que fala"
          value="Inglês, francês, alemão, espanhol, mandarim, polonês, swahili"
        />
        <Characteristic
          label="Cidade onde vive"
          value="São Bernardo do Campo - SP"
        />
        <Characteristic
          label="Cidade natal"
          value="Porto Seguro - BA"
        />
        <Galery
          title="Galeria"
          customStyle="margin-top: 40px;"
        />
        <Galery
          title="Lugares"
          showTitle={true}
          customStyle="margin-top: 40px;"
          lines={1}
        />
        <Galery
          title="BLah"
          showTitle={true}
          customStyle="margin-top: 40px;"
          lines={1}
          columns={2}
          handleClick={() => console.log('OI')}
        />
        <SectionTitle
          customStyle={sectionTitleCustomStyle}
        >Oportunidades</SectionTitle>
        <EventList
          title="Eventos"
          showTitle={true}
          lines={1}
          columns={2}
          handleClick={() => console.log('OI')}
        />
        <SectionTitle
          customStyle={sectionTitleCustomStyle}
        >Areas de interesse</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <Line />
        
        <Characteristic
          label="Endereço"
          value="São Bernardo do Campo - SP"
        />
        <Characteristic
          label="Pode ser um ponto de hospedagem?"
          value="Sim"
        />
        <SectionTitle
          customStyle={sectionTitleCustomStyle}
        >Mais informações</SectionTitle>
        <Characteristic
          label="Formação"
          value="Farmacêutica"
        />
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Hobbies</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
  
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Livros</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
  
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Músicas</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Comidas</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Filmes</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Séries</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Sonhos</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Lugares favoritos</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Lugares que gostaria de conhecer</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Como pode colaborar com esta comunidade?</SectionTitle>
        <TagList customStyle={maxWidthCustomStyle} />
      </Container>
    </Wrapper>
  );
}


ActivistModal.propTypes = {
};

ActivistModal.defaultProps = {
};

export default ActivistModal;
