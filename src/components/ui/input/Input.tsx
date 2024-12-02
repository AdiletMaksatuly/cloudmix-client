import { PropsWithChildren } from 'react';
import styles from './Input.module.scss';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  ...props
}: PropsWithChildren<InputProps>) {
  const cssClasses = [styles.input, className].filter(Boolean).join(' ');

  return <input {...props} className={cssClasses} />;
}
