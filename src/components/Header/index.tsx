import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';

const Header: NextPage = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <Link href="/register" scroll={false}>
          <a className={styles.logo}>Country house</a>
        </Link>

        <Link href="/">
          <a className={styles.login}>Login</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
