import React, { useEffect } from 'react';
import { Separator } from './sandbox.style';
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../../organisms/map/map.organism"), {
  ssr: false
});

/**
 * This render the Landing template.
 */
const Landing = () => {

  return (
    <Separator>
      <MapWithNoSSR />
    </Separator>
  );
}

export default Landing;
