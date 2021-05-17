import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import ActivistModal from '../../modals/activist/activist.modal';
import { Container, MapContainer } from './sandbox.style';
import { getRandomNumber } from '../../../utils/random.util';
import { Activist } from '../../../models/activist.model';
import { useContext } from 'react/cjs/react.development';
import Store from '../../../store/Store';

const MapWithNoSSR = dynamic(() => import("../../organisms/map/map.organism"), {
  ssr: false
});

/**
 * This render the Sandbox template.
 */
const Sandbox = () => {
  // const { setActivists } = useContext(Store);
  //  useEffect(() => {
  //   const myActivists = [];
  //   let number = getRandomNumber(dummyCoordinates.length);
  //   if (number < 8) number = 15;
  //   for (let i = 0; i< number; i++) {
  //     const newAct = new Activist();
  //     newAct.generateActivist();
  //     myActivists.push(newAct);
  //   }
  //   setActivists(myActivists.map((a, i) => {
  //     a.setId(i)
  //     return a;
  //   }));
  // }, []);
  return (
    <Container>
      <ActivistModal />
      <MapContainer>
        <MapWithNoSSR />
      </MapContainer>
    </Container>
  );
}

export default Sandbox;
