import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <h1>Country house</h1>
        <span>Login</span>
      </nav>
    </header>
  );
}
