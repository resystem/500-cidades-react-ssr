import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { dummyCoordinates } from '../dummies/locations';
import { Activist } from '../models/activist.model';
import { StoreProvider } from '../store/Store';
import { getRandomNumber } from '../utils/random.util';

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

  useEffect(() => {
    const myActivists = [];
    let number = getRandomNumber(dummyCoordinates.length);
    if (number < 8) number = 15;
    for (let i = 0; i< number; i++) {
      const newAct = new Activist();
      newAct.generateActivist();
      myActivists.push(newAct);
    }
    setActivists(myActivists.map((a, i) => {
      a.setId(i)
      return a;
    }));
  }, []);
  
  
  return (
    <StoreProvider values={values}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default Main;