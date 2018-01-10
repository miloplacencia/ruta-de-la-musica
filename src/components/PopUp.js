/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import images from '../logos/images';

console.log(images);

const PopUp = ({ abierto, cerrarPopup, local }) =>
  (abierto && local ? (
    <div className="rm-mapa__container-popup">
      <button className="rm-mapa__popup-cerrar" onClick={cerrarPopup}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
            <path fill="#CACBC6" d="M0 24h24V0H0z" />
            <path fill="#FFFFFE" d="M6.4 8.391l9.209 9.209 1.991-1.991L8.391 6.4z" />
            <path fill="#FFFFFE" d="M8.391 17.6L17.6 8.391 15.609 6.4 6.4 15.609z" />
          </g>
        </svg>
      </button>
      <div className="rm-mapa__popup-inner">
        <div className="rm-mapa__popup-scroller">
          <img src={images[local.nombre]} alt={local.Nombre} width="100" height="100" />
          <h1>{local.Nombre}</h1>
          <p>{local['Reseña']}</p>
          <hr />
          <ul className="flex lista row p0 m0 mb16">
            {local['Hora de Funcionamiento'] ? (
              <li className="half flex row justify-center align-center">
                <span className="sprite-local image reloj" />
                {local['Hora de Funcionamiento']}
              </li>
            ) : (
              ''
            )}
            {local['Dirección'] ? (
              <li className="half flex row justify-center align-center">
                <span className="sprite-local image pointer" />
                {local['Dirección']}
              </li>
            ) : (
              ''
            )}
          </ul>

          <ul className="flex lista row p0 m0">
            {local.Facebook ? (
              <li className="center text-center">
                <a
                  href={`http://${local.Facebook}`}
                  className="sprite-local boton facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
            ) : (
              ''
            )}
            {local.Instagram ? (
              <li className="center text-center">
                <a
                  href={`http://${local.Instagram}`}
                  className="sprite-local boton instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
            ) : (
              ''
            )}
            {local['Página Web'] ? (
              <li className="center text-center">
                <a
                  href={`http://${local['Página Web']}`}
                  className="sprite-local boton web"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    </div>
  ) : null);

PopUp.propTypes = {
  abierto: PropTypes.bool.isRequired,
  cerrarPopup: PropTypes.func.isRequired,
  local: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PopUp;
