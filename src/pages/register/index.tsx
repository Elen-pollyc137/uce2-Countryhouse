import React, { useEffect, useState, memo } from 'react';
import GoogleMapReact from 'google-map-react';
import Head from 'next/head';
import styles from './styles.module.scss';
import { GoPlus } from 'react-icons/go';
import LocalPointer from '../../components/LocalPointer';
import Local from '../../components/Local';
import House from '../../components/House';
import FormHouse from '../../components/FormHouse';
import { defaultProps } from '../../../utils/defaultProps';
import { useUser } from '../../hooks/useUser';
const key = process.env.NEXT_PUBLIC_KEY_MAP as string;

function Register() {
  const [data, setData] = useState<any>(false);
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const { fetchLocal, myLocal, local, setLocal, form, setForm, login } =
    useUser();

  function mapClicked(mapProps: any) {
    if (form) {
      setLat(mapProps.lat);
      setLng(mapProps.lng);
    }
  }
  function mapClickedLocal(data: any) {
    setData(data);
    setLocal(true);
  }

  useEffect(() => {
    fetchLocal();
    console.log('Register *** ', myLocal);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Country House | Register</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className={styles.container}>
        <div className={styles.map}>
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
            {form && lat && lng && <LocalPointer lat={lat} lng={lng} />}
            {myLocal &&
              !form &&
              myLocal.map((local: any) => (
                <Local
                  onClick={() => mapClickedLocal(local)}
                  key={local.id}
                  lat={local.lat}
                  lng={local.lng}
                  text={local.name}
                  img={local.img}
                  available={local.available}
                />
              ))}
          </GoogleMapReact>
          {!form && (
            <button onClick={() => setForm(!form)} className={styles.buttonAdd}>
              <GoPlus size={16} />
              <span>Novo Local</span>
            </button>
          )}
        </div>
        {form && (
          <FormHouse lat={lat} lng={lng} setForm={setForm} form={form} />
        )}
        {local && !form && (
          <House setLocal={setLocal} data={data} isLogin={true} />
        )}
      </section>
    </>
  );
}

export default memo(Register);
