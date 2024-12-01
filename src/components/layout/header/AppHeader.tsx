import Link from 'next/link';
import Image from 'next/image';
import APP_ROUTES from '@/consts/routes.const';
import styles from './AppHeader.module.scss';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <nav>
          <ul>
            <li>
              <Link href={APP_ROUTES.Chat}>
                <Image
                  src="/assets/logo.svg"
                  alt="Cloudmix logo - Home"
                  width={146}
                  height={42}
                  priority
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
