import dynamic from 'next/dynamic';
import React from 'react';
import ActivistModal from '../../modals/activist/activist.modal';
import { Container, MapContainer } from './landing.style';

const MapWithNoSSR = dynamic(() => import("../../organisms/map/map.organism"), {
  ssr: false
});

/**
 * This render the Landing template.
 */
const Landing = () => (
  <Container>
      <ActivistModal />
      <MapContainer>
        <MapWithNoSSR />
      </MapContainer>
    </Container>
);

export default Landing;
