import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Head from 'next/head';
const key = process.env.NEXT_PUBLIC_KEY_MAP as string;
import styles from './styles.module.scss';
import Local from '../../components/Local';
import { apiGet } from '../../services/Api';
import LocalTour from '../../components/LocalTour';
import House from '../../components/House';
import { getAllLocals } from '../../../lib/dato';
import { useUser } from '../../hooks/useUser';
import { defaultProps } from '../../../utils/defaultProps';
type IPointer = {
  img: [{ url: string }];
  name: string;
  localization: { latitude: number; longitude: number };
  description: string;
  id: string;
};

type IPointerArray = {
  pointer: [IPointer];
};

type ILocal =
  | {
      available: boolean;
      description: string;
      id: string;
      img: string;
      lat: string;
      lng: string;
      name: string;
      phone: string;
      price: string;
    }
  | any;
type ILocals = [ILocal] | any;

export default function Location({ pointer }: IPointerArray) {
  const [locals, setLocals] = useState<ILocals>(false);
  const [local, setLocal] = useState<boolean>(false);
  const [data, setData] = useState<ILocal>(false);
  const { setError } = useUser();
  function mapClickedLocal(data: ILocal | IPointer) {
    setData(data);
    setLocal(true);
  }
  async function fetchLocal() {
    try {
      const { data } = await apiGet('/api/locations');
      setLocals(data);
      console.log(data);
    } catch (error) {
      setError('Não foi possível pegar os Locais');
    }
  }
  useEffect(() => {
    fetchLocal();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Country House | Map</title>

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
            options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
          >
            {locals &&
              locals.map((local: ILocal) => (
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
            {pointer.map((local: IPointer) => (
              <LocalTour
                onClick={() => mapClickedLocal(local)}
                key={local.id}
                lat={local.localization?.latitude}
                lng={local.localization?.longitude}
                text={local.name}
                img={local.img[0].url}
              />
            ))}
          </GoogleMapReact>
        </div>

        {local && <House setLocal={setLocal} data={data} />}
        {!local && (
          <div className={styles.painel}>
            {pointer.map((item: IPointer) => (
              <div
                onClick={() => mapClickedLocal(item)}
                key={item.name}
                className={styles.card}
              >
                <img
                  src={item.img[0].url}
                  alt={item.name}
                  className={styles.img}
                />
                <div className={styles.texts}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const pointer = await getAllLocals();
  return {
    props: {
      pointer,
    },
  };
};
