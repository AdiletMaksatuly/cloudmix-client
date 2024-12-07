import Link from 'next/link';
import Image from 'next/image';
import APP_ROUTES from '@/shared/consts/routes.const';
import Logout from '@/shared/components/layout/logout/Logout';
import styles from './AppHeader.module.scss';

export default async function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <nav className={styles.menu}>
          <Link href={APP_ROUTES.Chats} className={styles['logo-link']}>
            <Image
              src="/assets/logo.svg"
              alt="Cloudmix logo - Home"
              width={146}
              height={42}
              priority
            />
          </Link>

            <div>
              <span className={styles.username}>Name</span>
              <Logout />
            </div>
        </nav>
      </div>
    </header>
  );
}
