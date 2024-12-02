import React, { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'filled' | 'stroked';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

function Button({
  children,
  variant = 'filled',
  className,
  type = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const cssClasses = [styles.btn, styles[`btn--${variant}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...props} type={type} className={cssClasses}>
      {children}
    </button>
  );
}

const defaultProps: ButtonProps = {
  variant: 'filled',
};

Button.defaultProps = defaultProps;

export default Button;
