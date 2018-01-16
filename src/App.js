/* eslint-disable */
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
    popup: false, // popup abierto/cerrado
    data,
    secciones: [
      'Discoteque',
      'Barrio Brasil',
      'Espacio Cultural',
      'Tiendas de música y estudios de grabación',
      'Estudia Música en Conce',
      'Sector Plaza Perú',
      'Música en Vivo',
      'Calle Maipu',
      'Espacios Públicos',
      'Hitos',
      'Donde Comer',
    ],
  };
  /*
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
*/
  componentDidMount() {}

  cambiarSeccion = seccion => e => {
    e.preventDefault();

    if (this.state.seccion === seccion) {
      this.setState({ seccion: '' });
    } else {
      this.setState({ seccion });
    }
  };

  cerrarPopup = () => this.setState({ popup: false, local: '' });
  abrirPopup = (local = '') => () => this.setState({ local, popup: true });

  parseMarkers = () =>
    this.state.data.map(d => ({
      ...d,
      img: d.img.replace('/public', ''),
    }));

  findLocal = (local = this.state.local) => this.state.data.find(lcl => lcl.nombre === local);

  render() {
    return (
      <div className="rm-mapa">
        <MenuMapa
          seccion={this.state.seccion}
          secciones={this.state.secciones}
          cambiarSeccion={this.cambiarSeccion}
        />
        <div className="rm-mapa__container">
          <PopUp
            abierto={this.state.popup}
            cerrarPopup={this.cerrarPopup}
            local={this.findLocal()}
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
            data={this.parseMarkers()}
          />
        </div>
      </div>
    );
  }
}

export default App;
