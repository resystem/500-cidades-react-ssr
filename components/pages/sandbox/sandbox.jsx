import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import ActivistModal from '../../modals/activist/activist.modal';
import { Container, MapContainer } from './sandbox.style';

const MapWithNoSSR = dynamic(() => import("../../organisms/map/map.organism"), {
  ssr: false
});

/**
 * This render the Sandbox template.
 */
const Sandbox = () => {
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
