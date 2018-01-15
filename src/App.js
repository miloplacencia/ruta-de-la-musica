/* eslint-disable jsx-a11y/anchor-is-valid, no-undef, react/no-unused-state, no-unused-vars */
import React, { Component } from 'react';
import 'whatwg-fetch';
import Promise from 'bluebird';

import GMap from './components/GMap';
import PopUp from './components/PopUp';
import MenuMapa from './components/MenuMapa';
import data from './data.json';
import dataFull from './data-bruta.json';

import './App.css';

class App extends Component {
  state = {
    seccion: '', // seccion seleccionada
    local: '', // local abierto en popup
    index: -1,
    popup: false, // popup abierto/cerrado
    data,
    secciones: {
      'Música en vivo': 'musica-en-vivo',
      Discoteque: 'pubs-discoteques',
      'bares-restaurantes': '',
      'tiendas-escuelas-musica': '',
      'hitos-musicales': '',
      'Espacio Cultural': 'espacios',
      'Donde Comer': 'comer-dormir',
    },
    markers: [
      {
        seccion: 'musica-en-vivo',
        nombre: 'Casa-de-la-Musica',
        lat: -36.8292691,
        lng: -73.0591571,
        x: 0,
      },
      {
        seccion: 'pubs-discoteques',
        nombre: 'Bodeguita-de-Nicanor',
        lat: -36.8164755,
        lng: -73.0599805,
        x: 35,
      },
      {
        seccion: 'pubs-discoteque',
        nombre: 'La-Otra-Esquina',
        lat: -36.8149768,
        lng: -73.0571904,
        x: 35,
      },
    ],
  };

  componentDidMount() {
    // setTimeout(() => {
    //   const geocoder = new google.maps.Geocoder();
    //   const geoPromise = address =>
    //     new Promise((res, rej) =>
    //       geocoder.geocode({ address }, (results, status) => res([results, status])));

    //   Promise.map(
    //     dataFull,
    //     async (local) => {
    //       if (local.satelite) return local.direccion;

    //       const newDireccion = `${local.direccion}, ${local.comuna}`;

    //       const [l, status] = await geoPromise(newDireccion)
    //         .delay(1000)
    //         .catch(e => console.log(e) || []);

    //       console.log(status);

    //       if (l && status === 'OK') {
    //         return l.map((j) => {
    //           if (j && j.formatted_address.indexOf(local.direccion) > -1) {
    //             return {
    //               ...local,
    //               satelite: {
    //                 lat: j.geometry.location.lat(),
    //                 lng: j.geometry.location.lng(),
    //               },
    //               dir_map: j.formatted_address,
    //             };
    //           }

    //           return {
    //             direccion: j.formatted_address,
    //             newdir: newDireccion,
    //             satelite: {
    //               lat: j.geometry.location.lat(),
    //               lng: j.geometry.location.lng(),
    //             },
    //           };
    //         });
    //       }

    //       return { direccion: newDireccion, status };
    //     },
    //     {
    //       concurrency: 1,
    //     },
    //   )
    //     .then(d => console.log(d) || d.filter(e => e))
    //     .then(d => console.log(JSON.stringify(d)));
    // }, 10000);
  }

  cambiarSeccion = seccion => (e) => {
    e.preventDefault();

    if (this.state.seccion === seccion) {
      this.setState({ seccion: '' });
    } else {
      this.setState({ seccion });
    }
  };

  cerrarPopup = () => this.setState({ popup: false, local: '', index: -1 });
  abrirPopup = (local = '', index = -1) => () => this.setState({ local, index, popup: true });

  parseMarkers = () =>
    this.state.data.map(d => ({
      ...d,
      seccion:
        this.state.secciones[d['Categoría Principal']] || this.state.secciones[d['Categoría 2']],
      img: d.img.replace('/public', ''),
    }));

  render() {
    return (
      <div className="rm-mapa">
        <MenuMapa seccion={this.state.seccion} cambiarSeccion={this.cambiarSeccion} />
        <div className="rm-mapa__container">
          <PopUp
            abierto={this.state.popup}
            cerrarPopup={this.cerrarPopup}
            local={this.parseMarkers()[this.state.index]}
          />
          <GMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1sDPEuIvyyo8v06TUk_9AJ9Dhr0XEQOA&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={
              <div className="rm-mapa__container-iframe" style={{ height: '600px' }} />
            }
            mapElement={<div style={{ height: '100%' }} />}
            abrirPopup={this.abrirPopup}
            seccion={this.state.seccion}
            markers={this.state.markers}
            data={this.parseMarkers()}
          />
        </div>
      </div>
    );
  }
}

export default App;
