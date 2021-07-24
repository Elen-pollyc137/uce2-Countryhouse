import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';
export default function SignUp() {
  return (
    <>
      <Head>
        <title>Country House | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <img src="/assets/meditating.svg" alt="logo" className={styles.image} />
        <div className={styles.containerForm}>
          <form className={styles.form}>
            <label className={styles.title} htmlFor="">
              Cadastrar
            </label>
            <input type="text" placeholder="Telefone" />
            <input type="email" placeholder="e-mail" />
            <input type="password" placeholder="senha" />
            <input type="password" placeholder="Confirmar senha" />
            <button className={styles.button} type="submit">
              Cadastrar
            </button>

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
