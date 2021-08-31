import React from 'react';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.scss';

export default function Error() {
  const { error } = useUser();
  if (error)
    return <div className={`${styles.error} ${styles.animeLeft}`}>{error}</div>;

  return <div style={{ display: 'none' }} />;
}
