import React from 'react';
import { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useUser } from '../../../hooks/useUser';
import styles from './styles.module.scss';

export function ButtonMenu({ children }: any) {
  const { userLogout } = useUser();
  const [active, setActive] = useState(false);
  function handleLogout() {
    userLogout();
  }
  return (
    <div className={styles.flex} onClick={() => setActive(!active)}>
      {children}
      <AiOutlineCaretDown size={16} />
      {active && (
        <div onClick={() => setActive(false)} className={styles.overlay}>
          <ul className={styles.menu}>
            <li onClick={handleLogout}>
              <FiLogOut size={32} />
              <button>sair</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
