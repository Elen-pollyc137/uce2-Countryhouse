import Head from 'next/head';
import styles from './Login.module.scss';
import database from '../../../lib/database';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useUser } from '../../hooks/useUser';
import { NextPage } from 'next';
import { Loading } from '../../components/Loading';
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

type ILogin = {
  email: string;
  password: string;
};
const Home: NextPage = () => {
  const { userLogin, loading, error } = useUser();
  const [visible, setVisible] = useState<any>(true);

  const { register, handleSubmit } = useForm();
  function handleLogin(data: ILogin) {
    userLogin(data);
  }
  return (
    <section className={styles.container}>
      <Head>
        <title>Country House | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.containerLeft}>
        <div className={styles.contentText}>
          Country<span className={styles.span}>&</span>House O lugar para
          encotrar sua melhor versão.
        </div>
        <img src="/Assets/frame.svg" alt="frame" className={styles.image} />
      </div>
      <div className={styles.containerForm}>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
          <label className={styles.title} htmlFor="">
            Login <span className={styles.span}>!</span>
          </label>
          <input {...register('email')} type="email" placeholder="e-mail" />
          <div className={styles.password}>
            <input
              {...register('password')}
              placeholder="senha"
              type={visible ? 'password' : 'text'}
            />
            {visible ? (
              <BsFillEyeFill
                className={styles.eyes}
                onClick={() => setVisible(!visible)}
                size={22}
              />
            ) : (
              <BsFillEyeSlashFill
                className={styles.eyes}
                onClick={() => setVisible(!visible)}
                size={22}
              />
            )}
          </div>
          {!loading.login ? (
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
              <Loading />
            </button>
          )}
          <span className={styles.sign}>
            Ainda não tem conta?
            <strong>
              <Link href="/signup">Cadastre-se já!</Link>
            </strong>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Home;
export async function getServerSideProps() {
  await database().then(() => {
    console.log('conectado ao banco');
  });

  return { props: { pets: true } };
}
