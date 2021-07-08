import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import VMasker from 'vanilla-masker';
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
  MenuIcon,
  SectionTitle,
  BiographyText,
  Contact,
  Biography,
  Line,
  sectionTitleCustomStyle,
  sectionSmallTitleCustomStyle,
  maxWidthCustomStyle
} from './organization.modal.style';
import BackButton from '../../molecules/back-button/backButton';
import About from './components/about/about';
import ContactInfo from '../../molecules/contact-info/contact';
import Characteristic from '../../molecules/characteristic/characteristic';
import TagList from '../../molecules/taglist/taglist';
import Store from '../../../store/Store';
import { useTranslation } from 'react-i18next';
import { dateToStrDDMMYYYY } from '../../../utils/date.util';

/**
 * render the OrganizationModal atom.
 */
const OrganizationModal = ({
}) => {
  const { closeModal, modals, modalInfo, activists } = useContext(Store)
  const { t } = useTranslation();
  if (!modals.organization || !modalInfo) return null;
  const organization = modalInfo.organization;
  if (!organization) return null;
  console.log('🚀 ~ organization', organization);
  return (
    <Wrapper onClick={ () => closeModal() }>
      <Container onClick={ e => e.stopPropagation() }>
        <Header>
          <BackButton handleClick={ () => closeModal() } />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <ContentWrapper>
          <About
            avatarImage={ organization.profile_image?.single_size?.mimified }
            name={ `${organization.social_name || organization.name}` }
            location={ `${organization.address?.city} - ${organization.address?.state}` }
            facebook={ organization.facebook }
            twitter={ organization.twitter }
            instagram={ organization.instagram }
            tiktok={ organization.tiktok }
          />
          <Biography>
            <SectionTitle>{ t('organization_form.labels.biography') }</SectionTitle>
            <BiographyText>{ organization.biography }</BiographyText>
          </Biography>
          <Line />
          <Characteristic
            label={ t('organization_modal.address') }
            value={`
              ${organization.address?.street} ${organization.address?.number}
              - ${organization.address?.district}, ${organization.address?.city}
              - ${organization.address?.state} - ${organization.address?.country}
            `}
          />
          <Characteristic
            value={`
              ${VMasker.toPattern(organization.address?.zipcode, '99999-999')}
            `}
          />
          <Characteristic
            label="Pode ser um ponto de HOSPEDAGEM?"
            value="SIM"
          />
          <Contact>
            <SectionTitle>{ t('organization_form.subtitles.personalInformation') }</SectionTitle>
            <ContactInfo
              iconPath="/icons/world.svg"
              text={ organization.web_site }
              hide={ !organization.web_site }
            />
            <ContactInfo
              iconPath="/icons/mail.svg"
              text={ organization.email }
              hide={ !organization.email }
            />
            <ContactInfo
              iconPath="/icons/phone.svg"
              text={ organization.phone ? VMasker.toPattern(organization.phone, '(99) 9999-9999') : null }
              hide={ !organization.phone }
            />
            <ContactInfo
              iconPath="/icons/whatsapp.svg"
              text={ organization.whatsapp ? VMasker.toPattern(organization.whatsapp, '(99) 99999-9999') : null }
              hide={ !organization.whatsapp }
            />
          </Contact>
          <Characteristic
            label={ t('organization_form.labels.birthDate') }
            value={ VMasker.toPattern(dateToStrDDMMYYYY(new Date(+organization.birth_date)), '99/99/9999') }
            hide={ !organization.birth_date }
          />
          <Characteristic
            label={ t('organization_form.labels.sign') }
            value={ t(`birth_sign_list.${organization.birth_sign}`) }
            hide={ !organization.birth_sign }
          />
          <Characteristic
            label={ t('organization_form.labels.job') }
            value={ t(`job_list.${organization.job}`) }
            hide={ !organization.job }
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
            // images={organization.images}
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
          <TagList tags={organization.interests} customStyle={maxWidthCustomStyle} />
          */}
          
          <SectionTitle
            customStyle={ sectionTitleCustomStyle }
            hide={ !organization.education }
          >
            { t('organization_modal.more_informations') }
          </SectionTitle>
          <Characteristic
            label={ t('organization_form.labels.education') }
            value={ t(`education_list.${organization.education}`) }
            hide={ !organization.education }
          />
          <SectionTitle
            hide={ !organization.hobbies?.length }
            customStyle={ sectionSmallTitleCustomStyle }
          >
            { t('organization_form.labels.hobbies') }
          </SectionTitle>
          <TagList
            tags={ organization.hobbies || [] }
            hide={ !organization.hobbies?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            hide={ !organization.books?.length }
            customStyle={ sectionSmallTitleCustomStyle }
          >
            { t('organization_form.labels.books') }
          </SectionTitle>
          <TagList
            tags={ organization.books || [] }
            hide={ !organization.books?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            hide={ !organization.songs?.length }
            customStyle={ sectionSmallTitleCustomStyle }
          >
            { t('organization_form.labels.songs') }
          </SectionTitle>
          <TagList
            tags={ organization.songs || [] }
            hide={ !organization.songs?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.foods?.length }
          >
            { t('organization_form.labels.foods') }
          </SectionTitle>
          <TagList
            tags={ organization.foods || [] }
            hide={ !organization.foods?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.movies?.length }
          >
            { t('organization_form.labels.movies') }
          </SectionTitle>
          <TagList
            tags={ organization.movies || [] }
            hide={ !organization.movies?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.series?.length }
          >
            { t('organization_form.labels.series') }
          </SectionTitle>
          <TagList
            tags={ organization.series || [] }
            hide={ !organization.series?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.dreams?.length }
          >
            { t('organization_form.labels.dreams') }
          </SectionTitle>
          <TagList
            tags={ organization.dreams || [] }
            hide={ !organization.dreams?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.favorite_places?.length }
          >
            { t('organization_form.labels.favoritePlaces') }
          </SectionTitle>
          <TagList
            tags={ organization.favorite_places || [] }
            hide={ !organization.favorite_places?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.places_wanna_visit?.length }
          >
            { t('organization_form.labels.placesWannaVisit') }
          </SectionTitle>
          <TagList
            tags={ organization.places_wanna_visit || [] }
            hide={ !organization.places_wanna_visit?.length }
            customStyle={ maxWidthCustomStyle }
          />

          <SectionTitle
            customStyle={ sectionSmallTitleCustomStyle }
            hide={ !organization.how_to_collaborate?.length }
          >
            { t('organization_modal.how_to_collaborate') }
          </SectionTitle>
          <TagList
            tags={ organization.how_to_collaborate || [] }
            hide={ !organization.how_to_collaborate?.length }
            customStyle={ maxWidthCustomStyle }
          />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}


OrganizationModal.propTypes = {
};

OrganizationModal.defaultProps = {
};

export default OrganizationModal;
