import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { dummyCoordinates } from '../dummies/locations';
import { Activist } from '../models/activist.model';
import { StoreProvider } from '../store/Store';
import { getRandomNumber } from '../utils/random.util';
import Header from './templates/header/header.template';

const modalsInitialState = {
  activist: false,
  seeMore: true,
};

/**
 * render the Main.
 */
const Main = ({
  children,
}) => {
  const [auth, setAuth] = useState(null);
  const [idaSDK, setIdaSDK] = useState(null);
  const [modals, setModals] = useState(modalsInitialState);
  const [modalInfo, setModalInfo] = useState(null);
  const [activists, setActivists] = useState([]);

  const closeModal = () => {
    setModals(modalsInitialState);
    setModalInfo({});
  };

  const openModal = (modalToOpen, info) => {
    const newModals = { ...modalsInitialState };
    newModals[modalToOpen] = true;
    setModals(newModals);
    if (info) setModalInfo(info);
  };
  
  const values = {
    auth, setAuth,
    idaSDK, setIdaSDK,
    modals, closeModal, openModal,
    modalInfo, activists, setActivists,
  }; 
  
  return (
    <StoreProvider values={values}>
      <Header />
      {children}
    </StoreProvider>
  );
}

export default Main;