import React, { useState } from 'react';

import GoogleMapReact from 'google-map-react';
import Local from '../../components/Local';
export default function Register() {
  const [onMapClicked, setOnMapClicked] = useState({
    lat: -15.7420889,
    lng: -43.0286046,
  });
  console.log(onMapClicked);
  const defaultProps = {
    center: {
      lat: -15.7420889,
      lng: -43.0286046,
    },
    zoom: 12,
  };
  function mapClicked(mapProps: any) {
    console.log(mapProps);

    setOnMapClicked({ lat: mapProps.lat, lng: mapProps.lng });
  }

  return (
    <div style={{ height: '400px', width: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek`,
          language: 'pt-br',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={mapClicked}
        options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
      >
        <Local lat={onMapClicked.lat} lng={onMapClicked.lng} text="Casa" />
      </GoogleMapReact>
    </div>
  );
}
