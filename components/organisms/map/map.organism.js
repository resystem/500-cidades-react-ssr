/*global L*/
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Map, Marker, TileLayer  } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import styled from 'styled-components';
import ReactDOMServer from 'react-dom/server'
import ActivistPin from './components/activist-pin/activistPin';
import ColectivePin from './components/colective-pin/colectivePin';
import PlacePin from './components/place-pin/placePin';
import SpacePin from './components/space/spacePin';
import Store from '../../../store/Store';
import { dummyCoordinates } from '../../../dummies/locations';

const MapComp = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;
`;

const getRandomPin = () => {
  const n = Math.floor((Math.random() * dummyCoordinates.length));
  return dummyCoordinates[n];
}

const renderLixo = () => (
  <div>salveMlk</div>
)

const getPin = (type, imageUrl) => {
  if (type === 'activist') return ActivistPin({ imageUrl });
  if (type === 'colective') return ColectivePin({ imageUrl });
  if (type === 'space') return  SpacePin({ imageUrl })
  if (type === 'place') return PlacePin({ imageUrl })
  if (type === 'oportunity') return 'pin_activist'
  else return 'pin_activist'
}

const addPin = (pin, map) => {
  var greenIcon = new DivIcon({
    iconUrl: `/icons/${getPin(pin.type)}.svg`,
  });

  const options = {
    icon: undefined,
    children: <div>eee</div>
  };

  L.marker(pin.coords, options).addTo(map);
}

const renderMarkers = (markers, openActivistModal) => markers.map((marker) => (
  <Marker icon={new DivIcon({
    html: getPin('activist', marker.avatar_image),
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    })}
    onclick={() =>  openActivistModal(marker)}
    position={marker.geolocation}
  >
  </Marker>
))

// const RenderEvents = () => {
//   const map = useMapEvents({
//     click: (e) => {
//     console.log('🚀 ~ click', e.latlng)
//     },
//     locationfound: (location) => {
//       console.log('location found:', location)
//     },
//   })
//   return null;
// }

const MapComponent = () => {
  const { openModal, modals, activists } = useContext(Store);
  const openActivistModal = (data) => {
    openModal('activist', { activist_id: data.id });
  };
  

  return (
    <>
      <Map click={() => console.log('CLOCK')} style={{ width: '100%', height: '100vh', zIndex: 0, padding: 0 }} center={[47.379, 8.5375]} zoom={11} >
        <TileLayer url="http://ec2-52-36-191-196.us-west-2.compute.amazonaws.com/styles/basic-preview/{z}/{x}/{y}.png"/>
        {renderMarkers(activists, openActivistModal)}
        {/* {<RenderEvents />} */}
      </Map>
      <button
        onClick={() => addPin(getRandomPin(), map)}>
          lalala
      </button>
    </>
  )
}


export default MapComponent;

