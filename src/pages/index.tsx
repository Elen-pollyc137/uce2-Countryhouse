import Head from 'next/head';
import Image from 'next/image';
import styles from './Login.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Country House | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <div className={styles.image}>svg</div>
        <div className={styles.containerForm}>
          <form className={styles.form} action="">
            <label htmlFor="">login</label>
          </form>
        </div>
      </section>
    </>
  );
}
