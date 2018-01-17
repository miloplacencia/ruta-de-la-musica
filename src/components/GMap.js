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
const seccionesIcon = {
  Discoteque: 0,
  'Donde Comer': 70,
  'Espacio Cultural': 210,
  'Espacios Públicos': 175,
  'Estudia Música en Conce': 140,
  'Música en Vivo': 35,
  'Tiendas de música y estudios de grabación': 105,
};

const GMap = withScriptjs(
  withGoogleMap(({ abrirPopup, seccion, data, busqueda }) => (
    <GoogleMap
      defaultZoom={defaultZoom}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      {data
        .filter(marker => !seccion || marker.cat === seccion)
        .filter(marker => (busqueda ? marker.n.includes(busqueda) : true))
        .map(
          (marker, i) =>
            (marker.satelite ? (
              <Marker
                position={{ lat: marker.satelite.lat, lng: marker.satelite.lng }}
                icon={{
                  url: sprite,
                  scaledSize: new google.maps.Size(245, 44),
                  size: new google.maps.Size(35, 44),
                  origin: new google.maps.Point(seccionesIcon[marker.cat], 0),
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GMap;
