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
    busqueda: '',
    data,
    secciones: [
      'Discoteque',
      'Donde Comer',
      'Espacio Cultural',
      'Espacios Públicos',
      'Estudia Música en Conce',
      'Música en Vivo',
      'Tiendas de música y estudios de grabación',
    ],
  };

  cambiarSeccion = seccion => e => {
    e.preventDefault();

    if (this.state.seccion === seccion) {
      this.setState({ seccion: '' });
    } else {
      this.setState({ seccion });
    }
  };

  cambiarSeccionSelect = e => {
    const seccion = e.target.value;
    if (seccion === -1) return false;

    this.setState({ seccion });
  };

  cerrarPopup = () => this.setState({ popup: false, local: '' });
  abrirPopup = (local = '') => () => this.setState({ local, popup: true });

  parseMarkers = () =>
    this.state.data.map(d => ({
      ...d,
      img: d.img && d.img.replace('/public', ''),
    }));

  onChangeBusqueda = e => this.setState({ busqueda: e.target.value });

  findLocal = (local = this.state.local) => this.state.data.find(lcl => lcl.nombre === local);

  render() {
    return (
      <div className="rm-mapa">
        <MenuMapa
          seccion={this.state.seccion}
          secciones={this.state.secciones}
          cambiarSeccion={this.cambiarSeccion}
          cambiarSeccionSelect={this.cambiarSeccionSelect}
          onChangeBusqueda={this.onChangeBusqueda}
          busqueda={this.state.busqueda}
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
            busqueda={this.state.busqueda}
          />
        </div>
      </div>
    );
  }
}

export default App;
