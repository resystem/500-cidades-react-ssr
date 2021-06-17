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
  if (type === 'organization') return ColectivePin({ imageUrl });
  if (type === 'space') return  SpacePin({ imageUrl })
  if (type === 'place') return PlacePin({ imageUrl })
  if (type === 'oportunity') return 'pin_activist'
  else return 'pin_activist'
}

const renderMarkers = (markers, openActivistModal) => markers.map((marker) => (
  <Marker icon={new DivIcon({
    html: getPin(marker.type, marker?.profile_image?.single_size?.mimified),
    iconSize:     [94, 94], // size of the icon
    iconAnchor:   [25.5, 59.55], // point of the icon which will correspond to marker's location
    })}
    onclick={() =>  openActivistModal(marker)}
    position={[marker.address.lat, marker.address.lng]}
  >
  </Marker>
))

const MapComponent = () => {
  const { openModal, activists, user, entities } = useContext(Store);
  console.log('🚀 ~ entities', entities);
  const map = useRef(null);
  const [center, setCenter] = useState([-10.466205555063867, -48.62548828125001]);
  const [zoom, setZoom] = useState(5);
  const [markers, setMarkers] = useState([]);

  const openActivistModal = (data) => {
    openModal('activist', { activist: data });
  };

  useEffect(() => {
    if (user) {
      setCenter([user?.address.lat, user?.address.lng]);
      setZoom(10)
    }
  }, [user]);
  
  useEffect(() => {
    const myActivists = activists.map(a => ({
      ...a,
      type: 'activist',
    }))
    const newMarkers = myActivists.concat(entities);
    setMarkers(newMarkers);
  }, [activists, entities]);

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
        onclick={(data) => console.log(data)}
        onViewportChanged={(data) => console.log('🚀 ~ data', data)}
      >
        <TileLayer url="http://mapa.idativista.org:8080/styles/basic-preview/{z}/{x}/{y}.png"/>
        {renderMarkers(markers.filter((a) => a?.address?.lat), openActivistModal)}
      </Map>
    </>
  )
}


export default MapComponent;

