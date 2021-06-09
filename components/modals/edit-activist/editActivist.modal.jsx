import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Wrapper,
  MenuIcon,
  Header,
  PageTitle,
} from './editActivist.modal.style';
import Store from '../../../store/Store';
import HandleActivistForm from '../../templates/handle-activist-form/handleActivist.template';
import { handleSubmit } from './editActivist.controller';
import BackButton from '../../molecules/back-button/backButton';

/**
 * render the EditActivistModal atom.
 */
const EditActivistModal = ({
}) => {
  const { closeModal, modals, user, auth, setUser, setActivists, activists } = useContext(Store);
  const [isLoading, setLoading] = useState(false);
  if (!modals.editActivist) return null;
  if (!auth || !user) return null;
  return (
    <Wrapper>
      <Container /* onClick={e => e.stopPropagation()} */>
        <Header>
          <BackButton handleClick={() => closeModal()} />
          <PageTitle>Editar Perfil</PageTitle>
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <HandleActivistForm
          activist={user}
          handleSubmit={(activist) => handleSubmit(activist, auth.ida, user, setUser, closeModal, setActivists, activists, setLoading)}
          isLoading={isLoading}
          handleCancel={() => closeModal()}
        />
      </Container>
    </Wrapper>
  );
}


EditActivistModal.propTypes = {
};

EditActivistModal.defaultProps = {
};

export default EditActivistModal;
