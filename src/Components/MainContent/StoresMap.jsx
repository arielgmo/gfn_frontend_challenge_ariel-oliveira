import React from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import Leaflet from 'leaflet';
import blueIcon from '../../../resources/images/marker-blue.png';
import redIcon from '../../../resources/images/marker-red.png';
import './StoresMap.css';

const tonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tonerAttr = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
const zoomLevel = 13;

const getMarkers = (stores, minimunValue) => stores.map((store) => {
  let icon;
  if (store.revenue >= minimunValue) {
    icon = Leaflet.icon({ iconUrl: blueIcon });
  } else {
    icon = Leaflet.icon({ iconUrl: redIcon });
  }
  return (
    <Marker icon={icon} position={[store.latitude, store.longitude]}>
      <Popup>
        {`Loja: ${store.name}, Faturamento: ${store.revenue}`}
      </Popup>
    </Marker>
  );
});

const StoresMap = (props) => {
  const {
    stores,
    minimunValue,
  } = props;
  let mapCenter;
  if (
    stores[0] !== undefined && stores[0].latitude !== undefined && stores[0].longitude !== undefined
  ) {
    mapCenter = [stores[0].latitude, stores[0].longitude];
  } else {
    mapCenter = [-23.5486, -46.6392];
  }
  return (
    <Map
      center={mapCenter}
      zoom={zoomLevel}
      className="map-leaflet-container"
    >
      <TileLayer
        attribution={tonerAttr}
        url={tonerTiles}
      />
      {getMarkers(stores, minimunValue)}
    </Map>
  );
};

StoresMap.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    revenue: PropTypes.number,
  })),
  minimunValue: PropTypes.number,
};

StoresMap.defaultProps = {
  stores: [],
  minimunValue: 15000,
};

export default StoresMap;
