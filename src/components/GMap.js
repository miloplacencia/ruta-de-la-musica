/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import sprite from '../sprite.png';

const GMap = withScriptjs(withGoogleMap(({ abrirPopup, seccion, markers }) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -36.8278726, lng: -73.0493228 }}
    defaultOptions={{
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#474746' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#333333' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#F1F1F1' }] },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#7a797a' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#c8c8c8' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#c8c8c8' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#575757' }],
          },
        ],
      }}
  >
    <Marker
      position={{ lat: -36.8292691, lng: -73.0591571 }}
      icon={{
          url: sprite,
          size: new google.maps.Size(35, 44),
          origin: new google.maps.Point(35, 0),
        }}
      onClick={abrirPopup('casa-de-musica')}
      
    />
  </GoogleMap>
)));

GMap.propTypes = {
  abrirPopup: PropTypes.func.isRequired,
  seccion: PropTypes.string.isRequired,
};

export default GMap;
