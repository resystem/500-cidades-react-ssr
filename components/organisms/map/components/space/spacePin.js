/*global L*/
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer,  } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server'
import { PinContainer, Image } from './spacePin.style';

const SpacePin = ({ imageUrl }) => ReactDOMServer.renderToString(
  <PinContainer>
    <svg width="80" height="80" viewBox="0 0 112 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f)">
        <ellipse cx="27.1533" cy="69.4235" rx="15.5161" ry="1.57779" fill="#96638C"/>
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M56 0C25.0721 0 0 25.0721 0 56C0 81.3261 16.8123 102.726 39.8851 109.647L55.1677 132.58C55.5635 133.174 56.4362 133.174 56.832 132.58L72.1146 109.647C95.1876 102.726 112 81.3262 112 56C112 25.0721 86.9279 0 56 0Z" fill="#96638C"/>
      <g opacity="0.5" filter="url(#filter1_f)">
        <ellipse cx="56" cy="136.5" rx="34" ry="3.5" fill="#3B2737"/>
      </g>
      <circle cx="56" cy="56" r="48" fill="url(#pattern0)"/>
      <defs>
        <filter id="filter0_f" x="6.63721" y="62.8457" width="41.0321" height="13.1556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
        </filter>
        <filter id="filter1_f" x="17" y="128" width="78" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
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


export default SpacePin;

