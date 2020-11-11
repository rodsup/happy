import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
//importa a biblioteca de mapas do js/react
//yarn add leaflet react-leaftlet
//tilelayer seleciona o tipo de imagens
import { Map, TileLayer } from 'react-leaflet';
//importa estilizaxao do leaflet
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanage-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={ mapMarkerImg } alt="Happy"></img>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map  
                center={[-23.5507159,-46.6296437]}
                zoom={13}
                style={{ width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="https://api.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>
            
            <Link to="" className="create-orphanage">
                <FiPlus />
            </Link>
        </div>
    );
}

export default OrphanagesMap;