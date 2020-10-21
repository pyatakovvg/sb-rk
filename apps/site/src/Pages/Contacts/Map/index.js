
import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import fb from "./logotype.svg";


export default function MyMap() {
  return (
    <YMaps>
      <Map
        width={'100%'}
        height={'100%'}
        defaultState={{ center: [44.933812, 34.058878], zoom: 17, type: 'yandex#map' }}
      >
        <Placemark
          geometry={[44.933812, 34.058878]}
          properties={{
            balloonContent: 'Medium icon'
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: fb,
            iconImageSize: [92, 72],
            iconImageOffset: [-46, -72],
          }}
        />
      </Map>
    </YMaps>
  );
};
