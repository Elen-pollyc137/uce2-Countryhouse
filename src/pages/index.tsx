import Head from 'next/head';
import styles from './Login.module.scss';
import database from '../../lib/database';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useUser } from '../hooks/useUser';

type ISignIn = {
  email: string;
  password: string;
};
export default function Home() {
  const { userLogin, login, user, loading, error } = useUser();

  console.log({ login, user, loading, error });
  const { register, handleSubmit } = useForm();
  function handleSignIn(data: ISignIn) {
    userLogin(data);
  }
  return (
    <>
      <Head>
        <title>Country House | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <img src="/assets/swinging.svg" alt="logo" className={styles.image} />
        <div className={styles.containerForm}>
          <form onSubmit={handleSubmit(handleSignIn)} className={styles.form}>
            <label className={styles.title} htmlFor="">
              Login
            </label>
            <input {...register('email')} type="email" placeholder="e-mail" />
            <input
              {...register('password')}
              type="password"
              placeholder="senha"
            />

            {!loading ? (
              <button className={styles.button} type="submit">
                Entrar
              </button>
            ) : (
              <button
                disabled
                style={{ opacity: 0.5 }}
                className={styles.button}
                type="submit"
              >
                carregando...
              </button>
            )}
            <span>{error && error}</span>
            <span className={styles.sign}>
              Ainda não tem conta?{' '}
              <strong>
                <Link href="/Signup">Cadastre-se já!</Link>
              </strong>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  await database().then(() => {
    console.log('conectado ao banco');
  });

  return { props: { pets: true } };
}
