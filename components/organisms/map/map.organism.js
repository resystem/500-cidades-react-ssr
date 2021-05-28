/*global L*/
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Map, Marker, TileLayer  } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import ActivistPin from './components/activist-pin/activistPin';
import ColectivePin from './components/colective-pin/colectivePin';
import PlacePin from './components/place-pin/placePin';
import SpacePin from './components/space/spacePin';
import Store from '../../../store/Store';
import { dummyCoordinates } from '../../../dummies/locations';
import { getRandomNumber } from '../../../utils/random.util';
import { Activist } from '../../../models/activist.model';

const getRandomPin = () => {
  const n = Math.floor((Math.random() * dummyCoordinates.length));
  return dummyCoordinates[n];
}

const getPin = (type, imageUrl) => {
  if (type === 'activist') return ActivistPin({ imageUrl });
  if (type === 'colective') return ColectivePin({ imageUrl });
  if (type === 'space') return  SpacePin({ imageUrl })
  if (type === 'place') return PlacePin({ imageUrl })
  if (type === 'oportunity') return 'pin_activist'
  else return 'pin_activist'
}

const renderMarkers = (markers, openActivistModal) => markers.map((marker) => (
  <Marker icon={new DivIcon({
    html: getPin('activist', marker.avatar_image),
    iconSize:     [95, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    })}
    onclick={() =>  openActivistModal(marker)}
    position={[marker.address.lat, marker.address.lng]}
  >
  </Marker>
))

const MapComponent = () => {
  const { openModal, activists, user } = useContext(Store);
  const map = useRef(null);
  const [center, setCenter] = useState([-10.466205555063867, -48.62548828125001]);
  const [zoom, setZoom] = useState(5);

  const openActivistModal = (data) => {
    openModal('activist', { activist: data });
  };

  useEffect(() => {
    if (user) {
      setCenter([user?.address.lat, user?.address.lng]);
      setZoom(10)
    }
  }, [user]);
  // useEffect(() => {
  //   if (map.current) {
  //     map.current.onViewportChange(function(e) {
  //       console.log('🚀 ~ e', e);
  //   });
  //   }
  // }, [map]);

  return (
    <>
      <Map
        ref={map}
        click={() => console.log('CLOCK')}
        style={{
          width: '100%',
          height: 'calc(100vh - 50px)',
          zIndex: 0,
          padding: 0
        }}
        center={center}
        zoom={zoom}
        onViewportChanged={(data) => console.log('🚀 ~ data', data)}
      >
        <TileLayer url="http://mapa.idativista.org:8080/styles/basic-preview/{z}/{x}/{y}.png"/>
        {renderMarkers(activists, openActivistModal)}
      </Map>
    </>
  )
}


export default MapComponent;

