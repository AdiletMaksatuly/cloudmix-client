'use client';

import useAuth from '@/auth/hooks/useAuth.hook';
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
        <div className={styles['form-field']}>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              type="password"
              id="password"
              className={styles.input}
              name="password"
              placeholder="Enter your password"
              required
            />
          </label>
        </div>

        <button type="submit" className={styles['submit-btn']}>
          Log in
        </button>
      </form>
    </section>
  );
}

export default Login;
