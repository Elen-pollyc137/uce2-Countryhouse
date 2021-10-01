import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';
import { useUser } from '../../hooks/useUser';
import { IoIosArrowDown } from 'react-icons/io';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { ButtonMenu } from './ButtonMenu';

const Header: NextPage = () => {
  const { pathname } = useRouter();
  const { login, user } = useUser();

  return (
    <header
      className={
        ['/map', '/register'].includes(pathname)
          ? styles.headerContainer
          : styles.headerContainerClear
      }
    >
      <nav className={styles.headerContent}>
        <Link href="/" scroll={false}>
          <a className={styles.logo}>
            Country<span className={styles.span}>&</span>House
          </a>
        </Link>
        {login ? (
          <div className={styles.wrapperLink}>
            <Link href="/map" passHref>
              <a className={styles.login}>Mapa</a>
            </Link>
            <Link href="/register" passHref>
              <a className={styles.login}>Meus Locais</a>
            </Link>
            <Link href="/perfil" passHref>
              <a className={styles.login}>Perfil</a>
            </Link>
            <span className={styles.login}>
              <ButtonMenu>
                <span>Olá </span>
                <strong>{user?.name}</strong>
              </ButtonMenu>
            </span>
          </div>
        ) : (
          <>
            <div className={styles.wrapperLink}>
              <Link href="/map" passHref>
                <a className={styles.login}>Mapa</a>
              </Link>
              <Link href="/login" passHref>
                <a className={styles.login}>Login</a>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
