import React from 'react';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.scss';

export default function Message() {
  const { message } = useUser();
  if (message)
    return (
      <div className={`${styles.message} ${styles.animeLeft}`}>{message}</div>
    );

  return <div style={{ display: 'none' }} />;
}
