import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import VMasker from 'vanilla-masker';
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
import { useTranslation } from 'react-i18next';
import { dateToStrDDMMYYYY } from '../../../utils/date.util';

/**
 * render the ActivistModal atom.
 */
const ActivistModal = ({
}) => {
  const { closeModal, modals, modalInfo, activists } = useContext(Store)
  const { t } = useTranslation();
  if (!modals.activist || !modalInfo) return null;
  const activist = modalInfo.activist;
  if (!activist) return null;
  // return null;
  return (
    <Wrapper onClick={ () => closeModal() }>
      <Container onClick={ e => e.stopPropagation() }>
        <Header>
          <BackButton handleClick={ () => closeModal() } />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <About
          avatarImage={ activist.profile_image?.single_size?.mimified }
          name={ `${activist.social_name || activist.name}` }
          location={ `${activist.address?.city} - ${activist.address?.state}` }
          facebook={ activist.facebook }
          twitter={ activist.twitter }
          instagram={ activist.instagram }
          tiktok={ activist.tiktok }
        />
        <Biography>
          <SectionTitle>{ t('activist_form.labels.biography') }</SectionTitle>
          <BiographyText>{ activist.biography }</BiographyText>
        </Biography>
        <Contact>
          <SectionTitle>{ t('activist_form.subtitles.personalInformation') }</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text={ activist.web_site }
            hide={ !activist.web_site }
          />
          <ContactInfo
            iconPath="/icons/mail.svg"
            text={ activist.email }
            hide={ !activist.email }
          />
          <ContactInfo
            iconPath="/icons/phone.svg"
            text={ activist.phone ? VMasker.toPattern(activist.phone, '(99) 9999-9999') : null }
            hide={ !activist.phone }
          />
          <ContactInfo
            iconPath="/icons/whatsapp.svg"
            text={ activist.whatsapp ? VMasker.toPattern(activist.whatsapp, '(99) 99999-9999') : null }
            hide={ !activist.whatsapp }
          />
        </Contact>
        <Characteristic
          label={ t('activist_form.labels.gender') }
          value={ t(`gender_list.${activist.gender}`) }
          hide={ !activist.gender }
        />
        <Characteristic
          label={ t('activist_form.labels.sexualOrientation') }
          value={ t(`sex_orientation_list.${activist.sexual_orientation}`) }
          hide={ !activist.sexual_orientation }
        />
        <Characteristic
          label={ t('activist_form.labels.colorRace') }
          value={ t(`race_list.${activist.color_race}`) }
          hide={ !activist.color_race }
        />
        <Characteristic
          label={ t('activist_form.labels.deficiency') }
          value={ t(`disability_list.${activist.deficiency}`) }
          hide={ !activist.deficiency }
        />
        <Characteristic
          label={ t('activist_form.labels.birthDate') }
          value={ VMasker.toPattern(dateToStrDDMMYYYY(new Date(+activist.birth_date)), '99/99/9999') }
          hide={ !activist.birthDate }
        />
        <Characteristic
          label={ t('activist_form.labels.sign') }
          value={ t(`birth_sign_list.${activist.birth_sign}`) }
          hide={ !activist.birth_sign }
        />
        <Characteristic
          label={ t('activist_form.labels.job') }
          value={ t(`job_list.${activist.job}`) }
          hide={ !activist.job }
        />
        <Characteristic
          label={ t('activist_form.labels.mainLanguage') }
          value={ t(`language_list.${activist.main_language}`) }
          hide={ !activist.main_language }
        />
        <Characteristic
          label={ t('activist_form.labels.languages') }
          value={ activist.languages.map(l => t(`language_list.${l}`)).join(', ') }
          hide={ !activist.languages?.length }
        />
        {/*  <Galery
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
         */}
        <Line />
        <Characteristic
          label={ t('activist_modal.address') }
          value={ `${activist.address?.city} - ${activist.address?.state}` }
        />
        {/* <Characteristic
          label="Pode ser um ponto de hospedagem?"
          value="Sim"
        /> */}
        <SectionTitle
          customStyle={ sectionTitleCustomStyle }
          hide={ !activist.education }
        >
          { t('activist_modal.more_informations') }
        </SectionTitle>
        <Characteristic
          label={ t('activist_form.labels.education') }
          value={ t(`education_list.${activist.education}`) }
          hide={ !activist.education }
        />
        <SectionTitle
          hide={ !activist.hobbies?.length }
          customStyle={ sectionSmallTitleCustomStyle }
        >
          { t('activist_form.labels.hobbies') }
        </SectionTitle>
        <TagList
          tags={ activist.hobbies || [] }
          hide={ !activist.hobbies?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          hide={ !activist.books?.length }
          customStyle={ sectionSmallTitleCustomStyle }
        >
          { t('activist_form.labels.books') }
        </SectionTitle>
        <TagList
          tags={ activist.books || [] }
          hide={ !activist.books?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          hide={ !activist.songs?.length }
          customStyle={ sectionSmallTitleCustomStyle }
        >
          { t('activist_form.labels.songs') }
        </SectionTitle>
        <TagList
          tags={ activist.songs || [] }
          hide={ !activist.songs?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.foods?.length }
        >
          { t('activist_form.labels.foods') }
        </SectionTitle>
        <TagList
          tags={ activist.foods || [] }
          hide={ !activist.foods?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.movies?.length }
        >
          { t('activist_form.labels.movies') }
        </SectionTitle>
        <TagList
          tags={ activist.movies || [] }
          hide={ !activist.movies?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.series?.length }
        >
          { t('activist_form.labels.series') }
        </SectionTitle>
        <TagList
          tags={ activist.series || [] }
          hide={ !activist.series?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.dreams?.length }
        >
          { t('activist_form.labels.dreams') }
        </SectionTitle>
        <TagList
          tags={ activist.dreams || [] }
          hide={ !activist.dreams?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.favorite_places?.length }
        >
          { t('activist_form.labels.favoritePlaces') }
        </SectionTitle>
        <TagList
          tags={ activist.favorite_places || [] }
          hide={ !activist.favorite_places?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.places_wanna_visit?.length }
        >
          { t('activist_form.labels.placesWannaVisit') }
        </SectionTitle>
        <TagList
          tags={ activist.places_wanna_visit || [] }
          hide={ !activist.places_wanna_visit?.length }
          customStyle={ maxWidthCustomStyle }
        />

        <SectionTitle
          customStyle={ sectionSmallTitleCustomStyle }
          hide={ !activist.how_to_collaborate?.length }
        >
          { t('activist_modal.how_to_collaborate') }
        </SectionTitle>
        <TagList
          tags={ activist.how_to_collaborate || [] }
          hide={ !activist.how_to_collaborate?.length }
          customStyle={ maxWidthCustomStyle }
        />
      </Container>
    </Wrapper>
  );
}


ActivistModal.propTypes = {
};

ActivistModal.defaultProps = {
};

export default ActivistModal;
