/*global L*/
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer,  } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server'
import { PinContainer, ImageContainer, Image } from './colectivePin.style';

const ColectivePin = ({ imageUrl }) => ReactDOMServer.renderToString(
  <PinContainer>
    <svg width="78" height="98" viewBox="0 0 60 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g /* style="mix-blend-mode:multiply" */ filter="url(#filter0_f)">
        <ellipse cx="30" cy="69.5" rx="25" ry="1.5" fill={`url(#${imageUrl}1)`}/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 0C6.58172 0 3 3.58172 3 8V48C3 52.4183 6.58172 56 11 56H23.1001L29.3133 65.6146C29.7073 66.2242 30.5991 66.2242 30.9931 65.6146L37.2063 56H51C55.4183 56 59 52.4183 59 48V8C59 3.58172 55.4183 0 51 0H11Z" fill="#3B2737"/>
      <rect x="7" y="4" width="48" height="48" rx="4" fill="url(#pattern0)"/>
      <defs>
        <filter id="filter0_f" x="0" y="63" width="60" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
        </filter>
        <pattern id={`${imageUrl}1`} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#${imageUrl}`} transform="translate(-0.16 -0.40) scale(0.00187729)"/>
        </pattern>
      </defs>
    </svg>
    <ImageContainer>
      <Image objectFit="cover" id={imageUrl} src={imageUrl}  xlinkHref={imageUrl}/>
    </ImageContainer>
  </PinContainer>
);


export default ColectivePin;

