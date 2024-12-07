import styles from './Register.module.scss';
import RegisterForm from '@/auth/components/register-form/RegisterForm';
import Link from 'next/link';
import APP_ROUTES from '@/shared/consts/routes.const';

function Register() {
  return (
    <section className={styles.register}>
      <h1 className={styles.title}>Register</h1>

      <RegisterForm />

      <span className={styles['login-link']}>
        Already have an account?&nbsp;
        <Link href={APP_ROUTES.Register}>Login</Link>
      </span>
    </section>
  );
}

export default Register;
