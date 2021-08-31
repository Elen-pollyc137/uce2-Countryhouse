import styles from './styles.module.scss';

export function LoadingBall() {
  return (
    <div className={styles.loading}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
