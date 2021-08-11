import GoogleMapReact from 'google-map-react';
import Local from '../Local';
<<<<<<< HEAD
import LocalTour from '../LocalTour';
=======
>>>>>>> dev-heberth

export default function Map() {
  const defaultProps = {
    center: {
      lat: -15.7420889,
      lng: -43.0286046,
    },
    zoom: 11,
  };
<<<<<<< HEAD
  const defaultLocal = [
    {
      id: 1,
      name: 'casa',
      lat: -15.657349,
      lng: -42.924404,
      img: 'https://static.wixstatic.com/media/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.jpg/v1/fill/w_900,h_1200,al_c,q_85,usm_0.66_1.00_0.01/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.webp',
    },
  ];
  const defaultLocalTour = [
    {
      id: 1,
      name: 'Serrado',
      lat: -15.677349,
      lng: -42.844404,
      img: 'https://static.wixstatic.com/media/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.jpg/v1/fill/w_900,h_1200,al_c,q_85,usm_0.66_1.00_0.01/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.webp',
    },
  ];

  return (
    <div style={{ height: '88vh', width: '100%' }}>
=======

  return (
    <div style={{ height: '100vh', width: '100%' }}>
>>>>>>> dev-heberth
      <GoogleMapReact
        bootstrapURLKeys={{ key: `AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
      >
<<<<<<< HEAD
        {defaultLocal.map((local) => (
          <Local
            key={local.id}
            lat={local.lat}
            lng={local.lng}
            text={local.name}
            img={local.img}
          />
        ))}
        {defaultLocalTour.map((local) => (
          <LocalTour
            key={local.id}
            lat={local.lat}
            lng={local.lng}
            text={local.name}
            img={local.img}
          />
        ))}
=======
        <Local lat={-15.7420889} lng={-43.0286046} text="Poly" />
>>>>>>> dev-heberth
      </GoogleMapReact>
    </div>
  );
}