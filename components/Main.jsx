import React, { useState } from 'react';
import { StoreProvider } from '../store/Store';

const modalsInitialState = {
  activist: false,
  oportunity: false
};

/**
 * render the Main.
 */
const Main = ({
  Component, pageProps,
}) => {
  const [auth, setAuth] = useState(null);
  const [idaSDK, setIdaSDK] = useState(null);
  const [modals, setModals] = useState({
    oportunity: true,
  });

  const closeModal = () => {
    setModals(modalsInitialState);
  };

  const openModal = (modalToOpen) => {
    const newModals = modalsInitialState;
    newModals[modalToOpen] = true;
    setModals(newModals);
  };

  const values = {
    auth, setAuth,
    idaSDK, setIdaSDK,
    modals, closeModal, openModal,
  };


  return (
    <StoreProvider values={values}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default Main;
