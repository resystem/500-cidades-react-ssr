/*global L*/
import React, { useContext, useEffect } from 'react';
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
import Header from '../../templates/header/header.template';

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

const MapComponent = () => {
  const { openModal, modals, activists, setActivists } = useContext(Store);
  const openActivistModal = (data) => {
    openModal('activist', { activist_id: data.id });
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
    <>
      <Map click={() => console.log('CLOCK')} style={{ width: '100%', height: 'calc(100vh - 50px)', zIndex: 0, padding: 0 }} center={[47.379, 8.5375]} zoom={11} >
        <TileLayer url="http://ec2-52-36-191-196.us-west-2.compute.amazonaws.com/styles/basic-preview/{z}/{x}/{y}.png"/>
        {renderMarkers(activists, openActivistModal)}
      </Map>
    </>
  )
}


export default MapComponent;
