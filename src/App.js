/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import GMap from './components/GMap';
import PopUp from './components/PopUp';
import MenuMapa from './components/MenuMapa';

class App extends Component {
  state = {
    seccion: '', // seccion seleccionada
    local: '', // local abierto en popup
    popup: false, // popup abierto/cerrado
    markers: [
      {
        seccion: 'musica-en-vivo',
        nombre: 'casa-de-musica',
        lat: -36.8292691,
        lng: -73.0591571,
        x: 0,
      },
      {
        seccion: 'pubs-discoteques',
        nombre: 'bodeguita-nicanor',
        lat: -36.8164755,
        lng: -73.0599805,
        x: 35,
      },
    ],
  };

  cambiarSeccion = seccion => (e) => {
    e.preventDefault();

    if (this.state.seccion === seccion) {
      this.setState({ seccion: '' });
    } else {
      this.setState({ seccion });
    }
  };

  cerrarPopup = () => this.setState({ popup: false });
  abrirPopup = (local = '') => () => this.setState({ local, popup: true });

  render() {
    return (
      <div className="rm-mapa">
        <MenuMapa seccion={this.state.seccion} cambiarSeccion={this.cambiarSeccion} />
        <div className="rm-mapa__container">
          <PopUp
            abierto={this.state.popup}
            cerrarPopup={this.cerrarPopup}
            local={this.state.local}
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
          />
        </div>
      </div>
    );
  }
}

export default App;
