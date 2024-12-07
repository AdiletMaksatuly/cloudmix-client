import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  ...props
}: PropsWithChildren<InputProps>) {
  return <input {...props} className={clsx(styles.input, className)} />;
}
