'use client';

import { useFormState } from 'react-dom';
import { registerUser } from '@/auth/actions/registerUser.action';
import FormField from '@/shared/components/ui/form-field/FormField';
import Input from '@/shared/components/ui/input/Input';
import Button from '@/shared/components/ui/button/Button';
import styles from './RegisterForm.module.scss';

const initialState = {
  message: "",
};

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState);

  return (
    <form
      className={styles.form} action={formAction}>
      <FormField label="Username" controlId="username">
        <Input
          className={styles.input}
          id="username"
          type="Username"
          name="username"
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

      <Button variant="filled" type="submit">
        Register
      </Button>

      {
        state?.message &&
        <p aria-live="polite" className={styles.error} role="status">
          {state?.message}
        </p>
      }
    </form>
  )
}
