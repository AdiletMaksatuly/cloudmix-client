'use client'

import FormField from '@/shared/components/ui/form-field/FormField';
import Input from '@/shared/components/ui/input/Input';
import Button from '@/shared/components/ui/button/Button';
import { useFormState } from 'react-dom';
import { loginUser } from '@/auth/actions/loginUser.action';
import styles from './LoginForm.module.scss';

const initialState = {
  message: '',
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <form className={styles.form} action={formAction}>
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

      {
        state?.message &&
        <p aria-live="polite" className={styles.error} role="status">
          {state?.message}
        </p>
      }
    </form>

  )
}
