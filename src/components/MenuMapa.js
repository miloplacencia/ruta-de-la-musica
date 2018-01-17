/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';

const mapaSecciones = {
  Discoteque: (
    <svg width="26" height="26" viewBox="0 0 15 14">
      <path
        fillRule="evenodd"
        d="M14.778 3.788a.662.662 0 0 0 .175-.74.683.683 0 0 0-.64-.429H5.745C5.637 1.158 4.395 0 2.878 0 1.292 0 0 1.267 0 2.824 0 4.383 1.292 5.65 2.878 5.65a2.88 2.88 0 0 0 1.56-.465l3.295 2.977v4.491H5.336a.68.68 0 0 0-.686.674c0 .37.307.673.686.673h6.997a.68.68 0 0 0 .686-.673.68.68 0 0 0-.686-.674H9.936V8.162l4.842-4.374zM.418 2.824C.419 1.494 1.523.41 2.879.41c1.286 0 2.344.974 2.45 2.209H3.356a.683.683 0 0 0-.64.429.662.662 0 0 0 .175.74l1.234 1.115c-.378.22-.804.336-1.247.336-1.356 0-2.46-1.083-2.46-2.415zm11.915 10.24c.148 0 .267.117.267.263a.264.264 0 0 1-.267.262H5.336a.265.265 0 0 1-.268-.262c0-.146.12-.263.268-.263h2.816V7.982L4.604 4.777l-1.43-1.292a.253.253 0 0 1-.068-.288.262.262 0 0 1 .25-.167h10.957c.17 0 .234.128.25.167a.253.253 0 0 1-.069.288L9.517 7.982v5.082h2.816z"
      />
    </svg>
  ),
  'Donde Comer': (
    <svg width="26" height="26" viewBox="0 0 9 15">
      <g fillRule="evenodd">
        <path d="M2.295 14.776a.973.973 0 0 1-.7-.297.966.966 0 0 1-.297-.707V5.547C.917 5.323 0 4.65 0 4.29V.933a.606.606 0 0 1 1.208 0v2.61c0 .055.018.098.059.14a.189.189 0 0 0 .279 0 .185.185 0 0 0 .06-.14V.933a.604.604 0 0 1 1.208 0v2.61c0 .055.018.098.06.14a.189.189 0 0 0 .278 0 .185.185 0 0 0 .06-.14V.933a.605.605 0 0 1 1.208 0V4.29c0 .348-.767 1.025-1.133 1.255v8.227c0 .272-.099.51-.297.707a.97.97 0 0 1-.695.297M.604.734a.189.189 0 0 0-.14.06.185.185 0 0 0-.059.14V4.29c.063.18.955.872 1.162.945l.135.047v8.49c0 .163.059.301.179.421a.564.564 0 0 0 .823 0 .572.572 0 0 0 .179-.42v-8.49l.135-.048c.199-.07.953-.768.998-.958L4.015.933a.181.181 0 0 0-.06-.139.188.188 0 0 0-.278 0 .185.185 0 0 0-.06.14v2.61a.605.605 0 0 1-1.208 0V.933a.183.183 0 0 0-.06-.14.188.188 0 0 0-.279 0 .188.188 0 0 0-.059.14v2.61a.605.605 0 0 1-1.208 0V.933a.183.183 0 0 0-.06-.14.185.185 0 0 0-.139-.06M7.422 14.941a.973.973 0 0 1-.7-.297.967.967 0 0 1-.298-.707V6.824h-.709a.393.393 0 0 1-.284-.12.394.394 0 0 1-.118-.284V2.211c0-.606.218-1.131.648-1.561C6.392.219 6.917 0 7.522 0h.29a.59.59 0 0 1 .424.179.59.59 0 0 1 .18.425v13.333a.97.97 0 0 1-.299.707.97.97 0 0 1-.695.297zM5.717 6.419H6.83v7.518c0 .163.058.301.18.421a.564.564 0 0 0 .823 0 .574.574 0 0 0 .178-.421V.604a.184.184 0 0 0-.06-.139.185.185 0 0 0-.139-.06h-.289c-.5 0-.917.173-1.275.531-.356.356-.53.774-.53 1.275v4.208z" />
      </g>
    </svg>
  ),
  'Espacio Cultural': (
    <svg width="26" height="26" viewBox="0 0 17 12">
      <g fillRule="evenodd">
        <path d="M16.046 11.426h-1.907V8.848H1.907v2.578H0V0h1.907v5.686h14.139v5.74zm-1.502-.405h1.097V6.09H1.502V.404H.405v10.617h1.097V8.444h13.042v2.577z" />
        <path d="M16.046 5.04H6.624v-.707a2.254 2.254 0 0 1 2.251-2.25h4.92a2.254 2.254 0 0 1 2.251 2.25v.706zm-9.018-.406h8.613v-.3a1.849 1.849 0 0 0-1.846-1.848h-4.92a1.85 1.85 0 0 0-1.847 1.847v.301zM4.155 5.04a1.48 1.48 0 0 1 0-2.958 1.48 1.48 0 0 1 1.479 1.48 1.48 1.48 0 0 1-1.48 1.477m0-2.553a1.075 1.075 0 1 0 .001 2.147 1.075 1.075 0 0 0 0-2.147" />
      </g>
    </svg>
  ),
  'Espacios Públicos': (
    <svg width="26" height="26" viewBox="0 0 13 14">
      <path
        fillRule="evenodd"
        d="M12.397 12.75H8.514V6.131c.05-.011.1-.022.15-.035l3.409-.913a.314.314 0 0 0 .236-.349.32.32 0 0 0-.322-.276H7.152V1.797a.37.37 0 0 1 .373-.367c.207 0 .375.165.375.367v1.048c0 .11.091.199.204.199a.2.2 0 0 0 .203-.2V1.798a.775.775 0 0 0-.782-.766.775.775 0 0 0-.78.766V4.56H6.23V.923A.934.934 0 0 0 5.289 0a.933.933 0 0 0-.942.923v1.339c0 .11.091.2.204.2a.2.2 0 0 0 .203-.2V.923A.53.53 0 0 1 5.29.4a.53.53 0 0 1 .534.524V4.56h-4.81a.32.32 0 0 0-.322.276.315.315 0 0 0 .236.349l3.408.913c.05.013.101.024.152.035v6.617H.603A.598.598 0 0 0 0 13.34v.07c0 .325.27.59.603.59h11.794a.598.598 0 0 0 .603-.59v-.07c0-.325-.27-.59-.603-.59zm-4.29 0H4.894V6.22a8.423 8.423 0 0 0 3.213 0v6.528zM4.443 5.71L1.63 4.96h9.741l-2.813.752a3.51 3.51 0 0 1-.176.042l-.097.022-.021.004-.001.001a7.981 7.981 0 0 1-3.526 0l-.11-.025c-.062-.014-.124-.027-.184-.044zm8.15 7.698a.195.195 0 0 1-.196.192H.603a.194.194 0 0 1-.195-.192v-.069c0-.105.087-.191.195-.191h11.794c.108 0 .196.086.196.191v.07z"
      />
    </svg>
  ),
  'Estudia Música en Conce': (
    <svg width="26" height="26" viewBox="0 0 12 14">
      <path
        fillRule="evenodd"
        d="M2.339 14A2.337 2.337 0 0 1 0 11.669 2.337 2.337 0 0 1 3.054 9.45V1.602l.204-.04h.196L12 0v10.146a2.338 2.338 0 0 1-4.677 0 2.338 2.338 0 0 1 3.054-2.218V3.911l-5.7 1.044v6.714A2.338 2.338 0 0 1 2.34 14m0-4.255a1.93 1.93 0 0 0-1.931 1.924 1.93 1.93 0 0 0 1.93 1.923c1.064 0 1.93-.862 1.93-1.923V4.615l6.518-1.192v5.13l-.293-.14a1.929 1.929 0 0 0-2.762 1.734c0 1.06.866 1.923 1.93 1.923s1.93-.862 1.93-1.924V.488L3.463 1.97v8.105l-.293-.14a1.916 1.916 0 0 0-.831-.19"
      />
    </svg>
  ),
  'Música en Vivo': (
    <svg width="26" height="26" viewBox="0 0 12 14">
      <g fillRule="evenodd">
        <path d="M1.319 10.197a.536.536 0 0 1 .083-.554l4.527-5.428a3.432 3.432 0 0 0 1.66 1.66L2.16 10.404a.538.538 0 0 1-.558.082 2.447 2.447 0 0 0-.262.315.941.941 0 0 0 1.08-.087L8.4 5.726a3.037 3.037 0 0 1-2.322-2.322L1.09 9.384a.942.942 0 0 0-.051 1.14 2.91 2.91 0 0 1 .279-.327" />
        <path d="M6.601 3.741a2.648 2.648 0 0 0 1.86 1.584 2.57 2.57 0 0 0 1.6-.123c.254-.103.494-.248.713-.433A4.329 4.329 0 0 1 7.035 1.03a2.633 2.633 0 0 0-.557 2.313c.031.135.07.268.123.398m.22-1.215c.013-.133.037-.263.073-.391A4.697 4.697 0 0 0 7.98 3.823a4.684 4.684 0 0 0 1.688 1.086 2.235 2.235 0 0 1-1.116.022 2.27 2.27 0 0 1-.338-.103 2.244 2.244 0 0 1-.744-.495 2.231 2.231 0 0 1-.649-1.375 2.397 2.397 0 0 1 0-.432" />
        <path d="M11.137 4.396a2.638 2.638 0 0 0 .567-1.909A2.64 2.64 0 0 0 10.94.864 2.658 2.658 0 0 0 8.063.281a2.644 2.644 0 0 0-.656.385 3.93 3.93 0 0 0 3.73 3.73M8.215.656A2.234 2.234 0 0 1 9.278.502a2.246 2.246 0 0 1 2.024 2.024 2.252 2.252 0 0 1-.358 1.448A3.524 3.524 0 0 1 8.84 2.965 3.53 3.53 0 0 1 7.83.86c.123-.08.252-.149.386-.203M8.046 13.14a.204.204 0 0 0-.111-.265c-1.08-.44-2.07-.518-2.941-.23-.43.14-.705.328-.948.493-.275.187-.492.335-.86.354-.928.05-2.104-.683-2.17-1.67-.027-.408.14-.76.324-1.023a.936.936 0 0 1-.301-.275c-.236.323-.462.781-.426 1.325.03.482.264.911.603 1.25.524.524 1.304.834 1.993.797.479-.025.763-.219 1.064-.423.232-.158.472-.32.848-.445.777-.256 1.672-.18 2.66.222a.202.202 0 0 0 .265-.11" />
        <path d="M1.34 10.8c.091-.13.184-.237.263-.316a.557.557 0 0 1-.285-.287 3.004 3.004 0 0 0-.279.327.91.91 0 0 0 .11.132.945.945 0 0 0 .191.143" />
      </g>
    </svg>
  ),
  'Tiendas de música y estudios de grabación': (
    <svg width="26" height="26" viewBox="0 0 14 15">
      <path
        fillRule="evenodd"
        d="M4.206 15c-.082 0-.166-.003-.249-.01-.993-.067-1.95-.532-2.695-1.31C-.283 12.068-.43 9.598.935 8.174a3.157 3.157 0 0 1 2.117-.968h.007c1.464-.178 1.508-.297 1.72-.866.084-.226.188-.506.389-.867.46-.835.964-1.022 1.304-1.03.425-.016.82.234 1.08.654.118.193.207.278.262.317l2.25-2.332c.154-.177.195-.434.093-.603l-.084-.14.209-.195c.342-.145.706-.409 1.027-.743.32-.334.573-.715.712-1.072l.044-.07.152-.157c.166-.174.467-.12.7.121l.87.909c.232.242.281.557.114.731l-.218.206c-.34.144-.704.408-1.024.741a3.37 3.37 0 0 0-.709 1.066l-.044.07-.148.152-.128-.068c-.165-.09-.387-.044-.555.111l-2.352 2.56c-.08.186-.395.998.03 1.443a.694.694 0 0 0 .93.111l.328-.235-.018.414c-.019.448-.26.798-.807 1.168-.154.103-.347.17-.55.24-.55.19-1.07.37-.97 1.24.115 1.008-.41 1.962-.735 2.441-.085.135-.185.27-.295.393l-.194.222-.007-.01A3.184 3.184 0 0 1 4.206 15m-.82-7.42l.009.02-.301.018a2.78 2.78 0 0 0-1.879.849c-1.21 1.263-1.062 3.47.328 4.92.678.707 1.544 1.13 2.44 1.191.886.063 1.695-.24 2.277-.848l.097-.107c.1-.118.177-.224.247-.333.294-.436.768-1.288.668-2.158-.14-1.205.69-1.492 1.239-1.683.18-.061.348-.12.46-.195.27-.183.426-.34.514-.478-.298.06-.674.013-1.012-.34-.492-.513-.359-1.367-.096-1.943l.036-.053 2.39-2.6c.239-.226.554-.316.832-.246.165-.368.426-.745.744-1.077a3.7 3.7 0 0 1 1.116-.815l.126-.131c-.013.014-.035-.065-.115-.147l-.87-.908c-.08-.082-.162-.114-.17-.102l-.09.104c-.16.397-.439.813-.786 1.176a3.793 3.793 0 0 1-1.011.765 1 1 0 0 1-.228.909l-2.41 2.498-.087-.006c-.213-.015-.421-.19-.636-.539-.14-.226-.402-.464-.72-.464h-.016c-.342.009-.678.292-.97.822-.186.334-.284.6-.363.81-.255.687-.393.903-1.764 1.092"
      />
    </svg>
  ),
};

const MenuMapa = ({
  secciones,
  seccion,
  cambiarSeccion,
  cambiarSeccionSelect,
  busqueda,
  onChangeBusqueda,
}) => (
  <div className="rm-mapa__menu">
    <ul className="rm-mapa__menu-nav">
      {secciones.map(sec => (
        <li className="desktop" key={sec}>
          <a href="#" onClick={cambiarSeccion(sec)} className={seccion === sec ? 'activo' : ''}>
            {mapaSecciones[sec]}
            <strong>{sec}</strong>
          </a>
        </li>
      ))}
      <li className="movil">
        <a href="#">
          <select onChange={cambiarSeccionSelect}>
            <option value="-1">Filtros Categorías</option>
            {secciones.map(sec => (
              <option value={sec} key={sec}>
                {sec}
              </option>
            ))}
          </select>
        </a>
      </li>
      <li>
        <a href="#">
          <svg width="26" height="26" viewBox="0 0 13 13">
            <path
              fillRule="evenodd"
              d="M12.649 10.954L9.413 7.717c.47-.77.746-1.671.746-2.637A5.085 5.085 0 0 0 5.08 0 5.085 5.085 0 0 0 0 5.08a5.085 5.085 0 0 0 5.08 5.08c.966 0 1.868-.277 2.637-.748l3.237 3.237c.226.226.526.351.847.351.32 0 .622-.125.848-.35.227-.227.351-.528.351-.849 0-.32-.124-.62-.351-.847m-1.408 1.408L8.062 9.183c.43-.314.808-.69 1.12-1.121l3.18 3.18c.15.15.232.348.232.56 0 .21-.082.41-.233.56a.81.81 0 0 1-1.12 0M.407 5.08A4.678 4.678 0 0 1 5.08.406 4.678 4.678 0 0 1 9.753 5.08a4.643 4.643 0 0 1-.86 2.692A4.69 4.69 0 0 1 5.08 9.753 4.678 4.678 0 0 1 .407 5.08"
            />
          </svg>
          <input type="text" placeholder="Buscar" onChange={onChangeBusqueda} value={busqueda} />
        </a>
      </li>
    </ul>
  </div>
);

MenuMapa.propTypes = {
  seccion: PropTypes.string.isRequired,
  cambiarSeccion: PropTypes.func.isRequired,
};

export default MenuMapa;
