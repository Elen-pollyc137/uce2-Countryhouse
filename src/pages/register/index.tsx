import React, { useState } from 'react';

import GoogleMapReact from 'google-map-react';
import Local from '../../components/Local';
import { useUser } from '../../hooks/useUser';
import Router from 'next/router';
const key = process.env.NEXT_PUBLIC_KEY_MAP as string;

export default function Register() {
  const { login } = useUser();

  if (!login) Router.push('/');
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
          key,
          language: 'pt-br',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={mapClicked}
        options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
      >
        <Local lat={onMapClicked.lat} lng={onMapClicked.lng} text="" />
      </GoogleMapReact>
      <img
        src="https://nextjs-location-files.s3.amazonaws.com/961c7282eebbbc0766ffb887f1a33f42-download.jpeg"
        alt=""
      />
    </div>
  );
}
