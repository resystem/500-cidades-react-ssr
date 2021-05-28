import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import ActivistModal from '../../modals/activist/activist.modal';
import { Container, MapContainer } from './sandbox.style';
import Header from '../../templates/header/header.template';
import RegisterActivistModal from '../../modals/register-activist/registerActivist.modal';

const MapWithNoSSR = dynamic(() => import("../../organisms/map/map.organism"), {
  ssr: false
});

/**
 * This render the Sandbox template.
 */
const Sandbox = () => {
  return (
    <Container>
      <Header />
      <MapContainer>
        <MapWithNoSSR />
      </MapContainer>
    </Container>
  );
}

export default Sandbox;
