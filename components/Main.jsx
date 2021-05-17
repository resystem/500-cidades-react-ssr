import React, { useState } from 'react';
import { StoreProvider } from '../store/Store';

const modalsInitialState = {
  activist: false,
  seeMore: true,
};

/**
 * render the Main.
 */
const Main = ({
  Component, pageProps,
}) => {
  const [auth, setAuth] = useState(null);
  const [idaSDK, setIdaSDK] = useState(null);
  const [modals, setModals] = useState(modalsInitialState);
  const [modalInfo, setModalInfo] = useState(null);

  const closeModal = () => {
    setModals(modalsInitialState);
    setModalInfo({});
  };

  const openModal = (modalToOpen, info) => {
    const newModals = modalsInitialState;
    newModals[modalToOpen] = true;
    setModals(newModals);
    if (info) setModalInfo(info);
  };
  
  const values = {
    auth, setAuth,
    idaSDK, setIdaSDK,
    modals, closeModal, openModal,
    modals, modalInfo,
  };
  
  
  return (
    <StoreProvider values={values}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default Main;