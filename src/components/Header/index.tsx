import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';
import { useUser } from '../../hooks/useUser';
import { IoIosArrowDown } from 'react-icons/io';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';

const Header: NextPage = () => {
  const { pathname } = useRouter();
  const { login, user, userLogout } = useUser();

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
            <Link href="/map">
              <a className={styles.login}>Mapa</a>
            </Link>
            <Link href="/register">
              <a className={styles.login}>Meus Locais</a>
            </Link>
            <span className={`${styles.login} ${styles.hover}`}>
              <span>Olá </span>
              <strong>{user?.name}</strong>
              <IoIosArrowDown size={16} />
              <ul className={styles.menu}>
                {/* <li>
                  <FiLogOut size={32} />
                  <button>Perfil</button>
                </li> */}
                <li>
                  <FiLogOut size={32} />
                  <button
                    onClick={() => {
                      userLogout();
                    }}
                  >
                    sair
                  </button>
                </li>
              </ul>
            </span>
          </div>
        ) : (
          <>
            <div className={styles.wrapperLink}>
              <Link href="/map">
                <a className={styles.login}>Mapa</a>
              </Link>
              <Link href="/login">
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
