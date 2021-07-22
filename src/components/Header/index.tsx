import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <h1>Country house</h1>
        <Link href="/">
          <a>Login</a>
        </Link>
      </nav>
    </header>
  );
}
