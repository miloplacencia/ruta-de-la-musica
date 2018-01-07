import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ abierto, cerrarPopup }) =>
  (abierto ? (
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
      <div className="rm-mapa__popup-inner" />
    </div>
  ) : null);

PopUp.propTypes = {
  abierto: PropTypes.bool.isRequired,
  cerrarPopup: PropTypes.func.isRequired,
};

export default PopUp;
