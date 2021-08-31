import Head from 'next/head';
import styles from './styles.module.scss';
import database from '../../lib/database';
import Link from 'next/link';
import { NextPage } from 'next';
import TypeWriter from '../components/TypeWriter';
import { useUser } from '../hooks/useUser';

const typeWriter = [
  ' sua melhor versão.',
  ' belos caminhos.',
  ' lugares fantásticos.',
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
            encotrar
            <TypeWriter data={typeWriter} />
          </div>
          <img src="/Assets/frame.svg" alt="frame" className={styles.image} />
        </div>
      </section>
    </div>
  );
};

export default Home;
