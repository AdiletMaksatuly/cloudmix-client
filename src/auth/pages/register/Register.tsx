'use client';

import useAuth from '@/auth/hooks/useAuth.hook';
import FormField from '@/components/ui/form-field/FormField';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
import styles from './Register.module.scss';

function Register() {
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
    <section className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={submit}>
        <FormField label="Username" controlId="username">
          <Input
            className={styles.input}
            id="username"
            type="Username"
            name="Username"
            placeholder="Enter your username"
            required
          />
        </FormField>

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

        <FormField label="Confirm password" controlId="confirmPassword">
          <Input
            type="password"
            id="confirmPassword"
            className={styles.input}
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </FormField>

        <Button type="submit">Register</Button>
      </form>
    </section>
  );
}

export default Register;
