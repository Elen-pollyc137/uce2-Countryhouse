import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { useUser } from '../../hooks/useUser';
import { useEffect, useState } from 'react';

type ICreateUser = {
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  name: string;
};

type IMatch = string | boolean;
export default function SignUp() {
  const { loading, error, message, userCreate } = useUser();

  const [match, setMatch] = useState<IMatch>();

  useEffect(() => {
    setTimeout(() => {
      setMatch(false);
    }, 4000);
  }, [match]);

  const { register, handleSubmit } = useForm();

  function handleCreateUser(data: ICreateUser) {
    if (data.password === data.passwordConfirm) {
      userCreate(data);
    } else {
      setMatch('Senhas não confere');
    }
  }
  return (
    <>
      <Head>
        <title>Country House | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <img src="/Assets/swinging.svg" alt="logo" className={styles.image} />
        <div className={styles.containerForm}>
          <form
            onSubmit={handleSubmit(handleCreateUser)}
            className={styles.form}
          >
            <label className={styles.title} htmlFor="">
              Cadastrar
            </label>
            <input {...register('name')} type="text" placeholder="Nome" />
            <input {...register('email')} type="email" placeholder="e-mail" />
            <input {...register('phone')} type="text" placeholder="Telefone" />
            <input
              {...register('password')}
              type="password"
              placeholder="senha"
            />
            <input
              {...register('passwordConfirm')}
              type="password"
              placeholder="Confirmar senha"
            />
            {!loading ? (
              <button className={styles.button} type="submit">
                Criar
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
            <span>{message && message}</span>
            <span>{match && error}</span>
            <span className={styles.sign}>
              Já tem conta?
              <strong>
                <Link href="/"> Fazer login!</Link>
              </strong>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}
