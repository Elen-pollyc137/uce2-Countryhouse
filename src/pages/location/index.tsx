import React from 'react';
import Head from 'next/head';
import styles from './styles.module.scss';
import Map from '../../components/Map';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Location() {
  const poiter = [
    {
      name: 'Cachoeira do Serrado',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tenetur, mollitia ut reiciendis pariatur harum incidunt. Sit, nesciunt! Obcaecati expedita at libero blanditiis vitae consectetur ipsum doloribus saepe quisquam doloremque?',
      img: 'https://static.wixstatic.com/media/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.jpg/v1/fill/w_900,h_1200,al_c,q_85,usm_0.66_1.00_0.01/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.webp',
    },
    {
      name: 'Talhado',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tenetur, mollitia ut reiciendis pariatur harum incidunt. Sit, nesciunt! Obcaecati expedita at libero blanditiis vitae consectetur ipsum doloribus saepe quisquam doloremque?',
      img: 'https://www.minasecoturismo.com.br/wp-content/uploads/2019/03/C-1-800x600.jpg',
    },
    {
      name: 'Sete Quedas',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tenetur, mollitia ut reiciendis pariatur harum incidunt. Sit, nesciunt! Obcaecati expedita at libero blanditiis vitae consectetur ipsum doloribus saepe quisquam doloremque?',
      img: 'https://www.minasecoturismo.com.br/wp-content/uploads/2019/03/D-1-800x600.jpg',
    },
  ];
  return (
    <section className={styles.conteiner}>
      <Head>
        <title>Country House | Location</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.content}>
        <div className={styles.painel}>
          {poiter.map((item) => (
            <div key={item.name} className={styles.card}>
              <img src={item.img} alt={item.name} className={styles.img} />
              <div className={styles.texts}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </section>
  );
}
