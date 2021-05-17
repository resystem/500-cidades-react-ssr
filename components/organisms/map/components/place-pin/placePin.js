/*global L*/
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer,  } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server'
import { PinContainer, Image } from './placePin.style';

const PlacePin = ({ imageUrl }) => ReactDOMServer.renderToString(
  <PinContainer>
    <svg width="74" height="76" viewBox="0 0 74 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g /* style="mix-blend-mode:multiply" */ filter="url(#filter0_f)">
        <ellipse cx="37" cy="69.5" rx="32" ry="1.5" fill="#3B2737"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.58172 0 1 3.58172 1 8V48C1 52.4183 4.58172 56 9 56H30.3597L36.573 65.6146C36.9669 66.2242 37.8588 66.2242 38.2527 65.6146L44.466 56H65C69.4183 56 73 52.4183 73 48V8C73 3.58172 69.4183 0 65 0H9Z" fill="#3B2737"/>
      <rect x="1" y="8" width="72" height="40" fill="url(#pattern0)"/>
      <defs>
      <filter id="filter0_f" x="0" y="63" width="74" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
      </filter>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="translate(-0.16 -0.40) scale(0.00187729)"/>
        </pattern>
        <Image id="image0"  xlinkHref={imageUrl}/>
      </defs>
    </svg>


  </PinContainer>
);


export default PlacePin;

