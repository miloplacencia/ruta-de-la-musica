/* eslint-disable no-undef, no-unused-vars, object-curly-newline, function-paren-newline */
import React from 'react';
import PropTypes from 'prop-types';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import sprite from '../sprite.png';

const defaultZoom = 15;
const defaultCenter = { lat: -36.8278726, lng: -73.0493228 };
const defaultOptions = {
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
};

const GMap = withScriptjs(
  withGoogleMap(({ abrirPopup, seccion, markers, data }) => (
    <GoogleMap
      defaultZoom={defaultZoom}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      {data.filter(marker => !seccion || marker.seccion === seccion).map(
        (marker, i) =>
          (marker.satelite ? (
            <Marker
              position={{ lat: marker.satelite.lat, lng: marker.satelite.lng }}
              icon={{
                url: sprite,
                size: new google.maps.Size(35, 44),
                origin: new google.maps.Point(0, 0),
              }}
              onClick={abrirPopup(marker.nombre, i)}
              key={marker.nombre}
            />
          ) : null),
      )}
    </GoogleMap>
  )),
);

GMap.propTypes = {
  abrirPopup: PropTypes.func.isRequired,
  seccion: PropTypes.string.isRequired,
  markers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GMap;
