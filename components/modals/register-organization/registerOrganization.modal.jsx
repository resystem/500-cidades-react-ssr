import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Wrapper,
  MenuIcon,
  Header,
  PageTitle,
} from './registerOrganization.modal.style';
import Store from '../../../store/Store';
import { handleSubmit } from './registerOrganization.controller';
import BackButton from '../../molecules/back-button/backButton';
import HandleCollectiveForm from '../../templates/handle-collective-form/handleCollective.template';
import { useTranslation } from 'react-i18next';

/**
 * render the RegisterOrganizationModal modal.
 */
const RegisterOrganizationModal = ({
}) => {
  const { closeModal, modals, user, setUser, entities, setEntities } = useContext(Store);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  if (!modals.registerOrganization) return null;
  return (
    <Wrapper>
      <Container>
        <Header>
          <BackButton handleClick={() => closeModal()} />
          <PageTitle>{t('collective_form.register')}</PageTitle>
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <HandleCollectiveForm
          handleSubmit={(organization) => handleSubmit(organization, user.id, setUser, closeModal, entities, setEntities, setLoading)}
          isLoading={isLoading}
          handleCancel={() => closeModal()}
        />
      </Container>
    </Wrapper>
  );
}


RegisterOrganizationModal.propTypes = {
};

RegisterOrganizationModal.defaultProps = {
};

export default RegisterOrganizationModal;
