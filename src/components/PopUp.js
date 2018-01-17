/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
// import images from '../logos/images';

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
          {local.img ? <img src={local.img} alt={local.n} width="100" height="100" /> : null}
          <h1>{local.nombre}</h1>
          <p>{local.resena}</p>
          <hr />
          <ul className="flex lista row p0 m0 mb16">
            {local.horario ? (
              <li className="half flex row justify-center align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  className="mr8 d-block"
                >
                  <g fill="#414241" fillRule="evenodd">
                    <path d="M10.201.353C4.575.353 0 4.898 0 10.486c0 5.587 4.575 10.133 10.201 10.133s10.201-4.546 10.201-10.133c0-5.588-4.575-10.133-10.201-10.133m0 19.623c-5.268 0-9.555-4.257-9.555-9.49 0-5.233 4.287-9.49 9.555-9.49s9.555 4.257 9.555 9.49c0 5.233-4.287 9.49-9.555 9.49" />
                    <path d="M14.972 10.197h-4.388v-7.93a.324.324 0 0 0-.648 0v8.251c0 .178.144.323.324.323h4.712a.321.321 0 1 0 0-.643" />
                  </g>
                </svg>
                {local.horario}
              </li>
            ) : null}
            {local.direccion ? (
              <li className="half flex row justify-center align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 17 21"
                  className="mr8 d-block"
                >
                  <g fill="#414241" fillRule="evenodd">
                    <path d="M14.053 2.575C12.466 1.06 10.376.282 8.171.358 3.951.522.497 4.073.471 8.272a7.946 7.946 0 0 0 2.734 6.037c1.81 1.579 3.405 3.574 4.873 6.1l.415.715.446-.764c1.454-2.503 3.037-4.478 4.835-6.043a7.945 7.945 0 0 0 2.742-5.997 7.875 7.875 0 0 0-2.463-5.745m-.705 11.258c-1.805 1.57-3.396 3.537-4.855 6.008-1.465-2.473-3.058-4.442-4.862-6.015a7.3 7.3 0 0 1-2.512-5.55C1.14 4.415 4.317 1.15 8.197 1c.1-.003.2-.007.3-.007a7.34 7.34 0 0 1 5.107 2.046 7.24 7.24 0 0 1 2.264 5.281 7.297 7.297 0 0 1-2.52 5.513" />
                    <path d="M8.494 5.509c-1.554 0-2.817 1.255-2.817 2.797 0 1.542 1.263 2.797 2.817 2.797 1.553 0 2.817-1.255 2.817-2.797 0-1.542-1.264-2.797-2.817-2.797m0 4.952a2.164 2.164 0 0 1-2.17-2.155c0-1.188.974-2.154 2.17-2.154s2.169.966 2.169 2.154c0 1.19-.973 2.155-2.17 2.155" />
                  </g>
                </svg>
                {local.direccion}
              </li>
            ) : null}
          </ul>

          <ul className="flex lista row p0 m0">
            {local.fb ? (
              <li className="center text-center">
                <a href={`${local.fb}`} className="" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path fill="#68C1BE" d="M0 32.865h33.174V0H0z" />
                      <path
                        fill="#FFFFFE"
                        d="M17.787 13.457V11.59c0-.28.013-.498.037-.65a1.31 1.31 0 0 1 .175-.455.71.71 0 0 1 .436-.31 3.05 3.05 0 0 1 .803-.086h1.825V6.353h-2.917c-1.686 0-2.898.41-3.634 1.23-.738.819-1.106 2.027-1.106 3.624v2.25h-2.184v3.737h2.184v10.842h4.381V17.194h2.916l.385-3.737h-3.3z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            ) : null}
            {local.ig ? (
              <li className="center text-center">
                <a
                  href={`${local.ig}`}
                  className="sprite-local boton instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path fill="#68C1BE" d="M.667 32.865H33.84V0H.667z" />
                      <g fill="#FFFFFE">
                        <path d="M21.409 7.116h-8.79c-2.984 0-5.413 2.407-5.413 5.364v8.707c0 2.957 2.429 5.363 5.414 5.363h8.789c2.985 0 5.413-2.406 5.413-5.363V12.48c0-2.957-2.428-5.364-5.413-5.364zm3.672 14.07c0 2.007-1.648 3.64-3.672 3.64h-8.79c-2.025 0-3.672-1.633-3.672-3.64V12.48c0-2.008 1.647-3.639 3.673-3.639h8.789c2.024 0 3.672 1.631 3.672 3.639v8.707z" />
                        <path d="M17.014 11.826c-2.788 0-5.055 2.246-5.055 5.006 0 2.762 2.267 5.008 5.055 5.008 2.786 0 5.055-2.246 5.055-5.008 0-2.76-2.269-5.006-5.055-5.006m0 8.289c-1.828 0-3.314-1.47-3.314-3.283 0-1.809 1.486-3.283 3.314-3.283s3.314 1.474 3.314 3.283c0 1.812-1.486 3.283-3.314 3.283m5.266-9.751a1.28 1.28 0 0 0-.9.37c-.24.235-.376.56-.376.894 0 .332.137.66.376.894a1.287 1.287 0 0 0 1.803 0 1.27 1.27 0 0 0 .374-.894 1.267 1.267 0 0 0-1.276-1.264" />
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            ) : null}
            {local.web ? (
              <li className="center text-center">
                <a
                  href={`http://${local.web}`}
                  className="sprite-local boton web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path fill="#68C1BE" d="M.333 32.865h33.174V0H.333z" />
                      <path
                        fill="#FFFFFE"
                        d="M11.911 12.706h-1.535l-.938 3.95a16.93 16.93 0 0 0-.202.932 15.89 15.89 0 0 0-.16.963 20.227 20.227 0 0 0-.162-.96c-.071-.373-.129-.65-.177-.832l-1.072-4.053H6.188l-1.072 4.053a9.531 9.531 0 0 0-.204.918c-.072.396-.119.686-.14.874a22.99 22.99 0 0 0-.357-1.895l-.941-3.95H1.937l1.878 7.236H5.59l.992-3.791c.045-.169.106-.45.187-.844.08-.395.13-.68.151-.859.013.145.064.43.154.853.088.424.152.705.19.84l.996 3.8h1.778l1.874-7.235zm9.975 0H20.35l-.936 3.95c-.061.236-.129.548-.202.932a15.89 15.89 0 0 0-.16.963 20.227 20.227 0 0 0-.163-.96c-.07-.373-.13-.65-.176-.832l-1.072-4.053h-1.477l-1.072 4.053a9.531 9.531 0 0 0-.204.918c-.074.396-.119.686-.14.874a22.99 22.99 0 0 0-.357-1.895l-.943-3.95h-1.536l1.88 7.236h1.772l.993-3.791c.043-.169.106-.45.186-.844.082-.395.131-.68.152-.859.013.145.064.43.154.853.088.424.15.705.188.84l.998 3.8h1.778l1.874-7.235zm9.975 0h-1.537l-.936 3.95c-.061.236-.129.548-.202.932-.074.384-.129.705-.162.963a20.953 20.953 0 0 0-.337-1.792l-1.072-4.053h-1.477l-1.072 4.053a9.448 9.448 0 0 0-.206.918c-.072.396-.118.686-.138.874a23.686 23.686 0 0 0-.357-1.895l-.943-3.95h-1.536l1.88 7.236h1.772l.993-3.791c.043-.169.106-.45.186-.844.082-.395.131-.68.152-.859.013.145.064.43.152.853.09.424.153.705.19.84l.997 3.8h1.78l1.873-7.235z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  ) : null);

PopUp.defaultProps = {
  local: null,
};

PopUp.propTypes = {
  abierto: PropTypes.bool.isRequired,
  cerrarPopup: PropTypes.func.isRequired,
  local: PropTypes.objectOf(PropTypes.any),
};

export default PopUp;
