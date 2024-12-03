import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonVariant = 'default' | 'filled' | 'stroked';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

function Button({
  children,
  variant = 'default',
  className,
  type = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const cssClasses = clsx(styles.btn, styles[`btn--${variant}`], className);

  return (
    <button {...props} type={type} className={cssClasses}>
      {children}
    </button>
  );
}

export default Button;
