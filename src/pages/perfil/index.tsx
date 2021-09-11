import React, { useState } from 'react';
import Head from 'next/head';
import styles from './styles.module.scss';
import Modal from '../../components/Modal';
import { useUser } from '../../hooks/useUser';

export default function Perfil() {
  const [modal, setModal] = useState<any>(false);
  const { user } = useUser();
  return (
    <section className={styles.container}>
      <Head>
        <title>Country House | Map</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.card}>
        <div className={styles.wrapper__name}>
          <label htmlFor="">nome</label>
          <p>{user?.name}</p>
        </div>
        <div className={styles.wrapper__email}>
          <label htmlFor="">e-mail</label>
          <p>{user?.email}</p>
        </div>
        <div className={styles.wrapper__phone}>
          <label htmlFor="">phone</label>
          <p>{user?.phone}</p>
        </div>
        <div className={styles.wrapper__button}>
          <button onClick={() => setModal(true)}>editar</button>
        </div>
        {modal && <Modal setModal={setModal} />}
      </div>
    </section>
  );
}
