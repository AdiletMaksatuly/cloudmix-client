import Link from 'next/link';
import Image from 'next/image';
import APP_ROUTES from '@/consts/routes.const';
import Logout from '@/components/layout/logout/Logout';
import styles from './AppHeader.module.scss';

export default function AppHeader() {
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

          <Logout />
        </nav>
      </div>
    </header>
  );
}
