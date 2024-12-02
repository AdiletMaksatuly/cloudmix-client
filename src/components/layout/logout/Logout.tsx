'use client';

import useAuth from '@/auth/hooks/useAuth.hook';
import styles from './Logout.module.scss';

export default function Logout() {
  const { currentUser, logout } = useAuth();

  if (!currentUser) return null;

  return (
    <div>
      <span className={styles.username}>{currentUser?.name}</span>
      <button type="button" onClick={logout} className={styles['logout-btn']}>
        Logout
      </button>
    </div>
  );
}
