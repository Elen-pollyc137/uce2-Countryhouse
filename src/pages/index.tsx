import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';
import TypeWriter from '../components/TypeWriter';
import Tilt from 'react-parallax-tilt';
const typeWriter = [
  ' casas aconchegantes.',
  ' belos caminhos.',
  ' lugares fantásticos.',
  ' descanso e beleza',
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Country House | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.contentText}>
            Country<span className={styles.span}>&</span>House O lugar para
            encontrar
            <TypeWriter data={typeWriter} />
          </div>
          <img src="/Assets/frame.svg" alt="frame" className={styles.image} />
        </div>
        <div className={styles.card}>
          <Tilt className={styles.tilt}>
            <img src="/Assets/img.png" className="Tilt-inner" alt="frame" />
            <Link href="/map">
              <a className={styles.btn}>Locais disponíveis no mapa</a>
            </Link>
          </Tilt>
        </div>
      </section>
    </div>
  );
};

export default Home;
