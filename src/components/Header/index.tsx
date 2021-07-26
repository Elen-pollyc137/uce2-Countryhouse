import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <Link href="/location">
          <a className={styles.logo}>Country house</a>
        </Link>

        <Link href="/">
          <a className={styles.login}>Login</a>
        </Link>
      </nav>
    </header>
  );
}
