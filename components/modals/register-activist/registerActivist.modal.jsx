import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Wrapper,
  MenuIcon,
  Header,
  PageTitle,
} from './registerActivist.modal.style';
import Store from '../../../store/Store';
import HandleActivistForm from '../../templates/handle-activist-form/handleActivist.template';
import { handleSubmit } from './registerActivist.controller';
import BackButton from '../../molecules/back-button/backButton';

/**
 * render the RegisterActivistModal atom.
 */
const RegisterActivistModal = ({
}) => {
  const { closeModal, modals, user, auth, setUser, activists, setActivists } = useContext(Store);
  if (!modals.registerActivist) return null;
  if (!auth || user) return null;
  return (
    <Wrapper>
      <Container>
        <Header>
          <BackButton handleClick={() => closeModal()} />
          <PageTitle>Cadastrar ativista</PageTitle>
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <HandleActivistForm
          handleSubmit={(activist) => handleSubmit(activist, auth.ida, setUser, closeModal, activists, setActivists)}
          handleCancel={() => closeModal()}
        />
      </Container>
    </Wrapper>
  );
}


RegisterActivistModal.propTypes = {
};

RegisterActivistModal.defaultProps = {
};

export default RegisterActivistModal;
