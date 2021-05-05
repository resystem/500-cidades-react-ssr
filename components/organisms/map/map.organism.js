/*global L*/
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer,  } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import styled from 'styled-components';
import ReactDOMServer from 'react-dom/server'
import ActivistPin from './components/activist-pin/activistPin';

const MapComp = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;
`;

const dummyCoordinates = [
  {
    type: 'activist',
    coords: [47.40036, 8.49887],
  },
  {
    type: 'colective',
    coords: [47.39751, 8.63384],
  },
  {
    type: 'space',
    coords: [47.42342, 8.62092],
  },
  {
    type: 'activist',
    coords: [47.40917, 8.82636],
  },
  {
    type: 'space',
    coords: [47.5213, 8.9346],
  },
  {
    type: 'activist',
    coords: [47.5307, 8.6648],
  },
  {
    type: 'colective',
    coords: [47.3279, 8.7034],
  },
];

const getRandomPin = () => {
  console.log('🚀 ~ ', Math.ceil((Math.random() * dummyCoordinates.length)));
  const n = Math.floor((Math.random() * dummyCoordinates.length));
  return dummyCoordinates[n];
}

const renderLixo = () => (
  <div>salveMlk</div>
)

const getPin = (type) => {
  if (type === 'activist') return 'pin_activist'
  if (type === 'colective') return 'pin_colective'
  if (type === 'space') return 'pin_space'
  if (type === 'place') return 'pin_place'
  if (type === 'oportunity') return 'pin_activist'
  else return 'pin_activist'
}

const addPin = (pin, map) => {
console.log('🚀 ~ pin', pin);
  var greenIcon = new DivIcon({
    iconUrl: `/icons/${getPin(pin.type)}.svg`,
  });

  const options = {
    icon: undefined,
    children: <div>eee</div>
  };

  L.marker(pin.coords, options).addTo(map);
}

const Map = () => {
  // const [map, setMap] = useState(null);
  // useLayoutEffect(() => {
  //   if (!map && L) {
  //     const map = L.map('map', {
  //       center: [47.379, 8.5375],
  //       zoom: 11
  //     });
  //     L.tileLayer(
  //       'http://192.168.15.7:8080/styles/basic-preview/{z}/{x}/{y}.png',
  //       {
  //         foo: 'bar',
  //       }
  //     ).addTo(map);
  //     setMap(map);
  //   }
  // }, []);
  return (
    <>
      <MapContainer style={{ width: '100%', height: '80vh' }} center={[47.379, 8.5375]} zoom={11} >
        <TileLayer url="http://192.168.15.7:8080/styles/basic-preview/{z}/{x}/{y}.png"/>
        <Marker icon={new DivIcon({
          html: ActivistPin({
                  imageUrl: "/images/avatar_dummy.png"
                }),
          iconSize:     [38, 95], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          })}
          position={[47.42342, 8.62092]}
        >
        </Marker>
      </MapContainer>
      <button
        onClick={() => addPin(getRandomPin(), map)}>
          lalala
      </button>
    </>
  )
}


export default Map;

