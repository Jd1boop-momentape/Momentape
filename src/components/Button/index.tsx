import * as React from 'react';

import Button from '@mui/material/Button';

enum BtnType {
  button = 'button',
  submit = 'submit',
}

export interface ButtonProps {
  onClick?: VoidFunction;
  type?: BtnType;
  disabled?: boolean;
}

const Btn: React.FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  type = BtnType.button,
  disabled = false,
  ...props
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Btn;
