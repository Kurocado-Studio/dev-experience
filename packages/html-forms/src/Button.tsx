import React from 'react';

export interface ButtonProps
  extends React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  > {
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ type, ...props }: ButtonProps): React.ReactNode {
  const buttonType =
    type === 'button' || type === 'submit' || type === 'reset'
      ? type
      : 'button';

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} {...props}>
      {props.children}
    </button>
  );
}

Button.displayName = 'Button';
