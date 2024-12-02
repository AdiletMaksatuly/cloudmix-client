import { PropsWithChildren } from 'react';
import styles from './FormField.module.scss';

export interface FormFieldProps {
  label: string;
  controlId: string;
}

export default function FormField({
  children,
  label,
  controlId,
}: PropsWithChildren<FormFieldProps>) {
  return (
    <div>
      <label htmlFor={controlId} className={styles.label}>
        {label}
        {children}
      </label>
    </div>
  );
}
