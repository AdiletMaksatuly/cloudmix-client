import Link from 'next/link';
import APP_ROUTES from '@/shared/consts/routes.const';
import styles from './Login.module.scss';
import LoginForm from '@/auth/components/login-form/LoginForm';

function Login() {
  return (
    <section className={styles.login}>
      <h1 className={styles.title}>Login</h1>

      <LoginForm />

      <span className={styles['register-link']}>
        Don&apos;t have an account?&nbsp;
        <Link href={APP_ROUTES.Register}>Register here</Link>
      </span>
    </section>
  );
}

export default Login;
