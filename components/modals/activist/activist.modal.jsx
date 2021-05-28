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

/**
 * render the ActivistModal atom.
 */
const ActivistModal = ({
}) => {
  // const { closeModal, modals, modalInfo, activists } = useContext(Store)
  // if (!modals.activist || !modalInfo) return null;
  // const activist = activists[modalInfo.activist_id]
  // if (!activist) return null;
  return null;
  return (
    <Wrapper onClick={() => closeModal()}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton handleClick={() => closeModal()} />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <About
          avatarImage={activist.avatar_image}
          name={`${activist.name} ${activist.last_name}`}
          location="São Bernardo do Campo - SP"
          facebook={activist.facebook}
          twitter={activist.twitter}
          instagram={activist.instagram}
          tiktok={activist.tiktok}
        />
        <Biography>
          <SectionTitle>Biografia</SectionTitle>
          <BiographyText>{activist.biography}</BiographyText>
        </Biography>
        <Contact>
          <SectionTitle>Informações pessoais</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text={activist.web_site}
          />
          <ContactInfo
            iconPath="/icons/mail.svg"
            text={activist.email}
          />
          <ContactInfo
            iconPath="/icons/phone.svg"
            text={activist.phone}
          />
          <ContactInfo
            iconPath="/icons/whatsapp.svg"
            text={activist.whatsapp}
          />
        </Contact>
        <Characteristic
          label="Identidade de Gênero"
          value={activist.gender}
        />
        <Characteristic
          label="Orientação Sexual"
          value={activist.sexual_orientation}
        />
        <Characteristic
          label="Cor e Raça"
          value={activist.color_race}
        />
        <Characteristic
          label="Pessoa com Deficiência"
          value={activist.deficiency}
        />
        <Characteristic
          label="Data de nascimento"
          value={activist.birth_date}
        />
        <Characteristic
          label="Signo"
          value={activist.sign}
        />
        <Characteristic
          label="Profissão"
          value={activist.job}
        />
        <Characteristic
          label="Idioma principal"
          value={activist.main_language}
        />
        <Characteristic
          label="Outros idiomas que fala"
          value={activist.languages.join(', ')}
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
          title="Coletivos"
          showTitle={true}
          customStyle="margin-top: 40px;"
          lines={1}
          columns={2}
          // images={activist.images}
          handleClick={() => console.log('OI')}
        />
        <Galery
          title="Espaços"
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
        <TagList tags={activist.interests} customStyle={maxWidthCustomStyle} />
        
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
          value={activist.degree}
        />
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Hobbies</SectionTitle>
        <TagList tags={activist.hobbies} customStyle={maxWidthCustomStyle} />
  
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Livros</SectionTitle>
        <TagList tags={activist.books} customStyle={maxWidthCustomStyle} />
  
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Músicas</SectionTitle>
        <TagList tags={activist.songs} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Comidas</SectionTitle>
        <TagList tags={activist.foods} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Filmes</SectionTitle>
        <TagList tags={activist.movies} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Séries</SectionTitle>
        <TagList tags={activist.series} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Sonhos</SectionTitle>
        <TagList tags={activist.dreams} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Lugares favoritos</SectionTitle>
        <TagList tags={activist.favorite_places} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Lugares que gostaria de conhecer</SectionTitle>
        <TagList tags={activist.places_wanna_visit} customStyle={maxWidthCustomStyle} />
        
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Como pode colaborar com esta comunidade?</SectionTitle>
        <TagList tags={activist.how_collaborate} customStyle={maxWidthCustomStyle} />
      </Container>
    </Wrapper>
  );
}


ActivistModal.propTypes = {
};

ActivistModal.defaultProps = {
};

export default ActivistModal;
