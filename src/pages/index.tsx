import Head from 'next/head';
import styles from './Login.module.scss';
import database from '../../lib/database';

export default function Home() {
  return (
    <>
      <Head>
        <title>Country House | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <img src="/assets/swinging.svg" alt="logo" className={styles.image} />
        <div className={styles.containerForm}>
          <form className={styles.form}>
            <label className={styles.title} htmlFor="">
              Login
            </label>
            <input type="email" placeholder="e-mail" />
            <input type="password" placeholder="senha" />
            <button className={styles.button} type="submit">
              Entrar
            </button>

            <span className={styles.sign}>
              Ainda não tem conta? <strong>Cadastre-se já!</strong>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  await database().then(() => {
    console.log('0k');
  });

  return { props: { pets: true } };
}
