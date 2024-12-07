import styles from './Logout.module.scss';

export default function Logout() {
  return (
      <button type="button" className={styles['logout-btn']}>
        Logout
      </button>
  );
}
