'use client';

import useAuth from '@/auth/hooks/useAuth.hook';
import Link from 'next/link';
import APP_ROUTES from '@/consts/routes.const';
import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import FormField from '@/components/ui/form-field/FormField';
import styles from './Login.module.scss';

function Login() {
  const { login } = useAuth();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    login({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
  };

  return (
    <section className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={submit}>
        <FormField label="Email" controlId="email">
          <Input
            className={styles.input}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </FormField>

        <FormField label="Password" controlId="password">
          <Input
            type="password"
            id="password"
            className={styles.input}
            name="password"
            placeholder="Enter your password"
            required
          />
        </FormField>

        <Button variant="filled" type="submit">
          Log in
        </Button>
      </form>

      <span className={styles['register-link']}>
        Don`&apos;t have an account?
        {' '}
        <Link href={APP_ROUTES.Register}>Register here</Link>
      </span>
    </section>
  );
}

export default Login;
