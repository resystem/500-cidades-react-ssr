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
import FloatIcon from '../../templates/float-icon/floatIcon.template';

const getRandomPin = () => {
  const n = Math.floor((Math.random() * dummyCoordinates.length));
  return dummyCoordinates[n];
}

const getPin = (type, imageUrl) => {
  if (type === 'activist') return {
    html: ActivistPin({ imageUrl }),
    iconSize: [94, 80],
    iconAnchor: [40, 76],
  }
  if (type === 'organization') return {
    html: ColectivePin({ imageUrl }),
    iconSize: [94, 94],
    iconAnchor: [27, 89],
  }
  if (type === 'space') return  SpacePin({ imageUrl })
  if (type === 'place') return PlacePin({ imageUrl })
  if (type === 'oportunity') return 'pin_activist'
  else return 'pin_activist'
}

const renderMarkers = (markers, openModalProxy) => markers.map((marker) => {
  const pin = getPin(marker.type, marker?.profile_image?.single_size?.mimified);
  return (
    <Marker icon={new DivIcon({
      html: pin.html,
      iconSize: pin.iconSize,
      iconAnchor: pin.iconAnchor,
      })}
      onclick={() =>  openModalProxy(marker.type, marker)}
      position={[marker.address.lat, marker.address.lng]}
    >
    </Marker>
  )
})

const MapComponent = () => {
  const { openModal, activists, user, entities } = useContext(Store);
  console.log('🚀 ~ entities', entities);
  const map = useRef(null);
  const [center, setCenter] = useState([-10.466205555063867, -48.62548828125001]);
  const [zoom, setZoom] = useState(5);
  const [markers, setMarkers] = useState([]);

  const openModalProxy = (type, data) => {
    if (type === 'activist') openModal('activist', { activist: data });
    if (type === 'organization') openModal('organization', { organization: data });
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
    console.log('🚀 ~ newMarkers', newMarkers);
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
        {renderMarkers(markers.filter((a) => a?.address?.lat), openModalProxy)}
      </Map>
      <FloatIcon />
    </>
  )
}


export default MapComponent;

