import React from 'react';
import { Button as MuiButton } from '@mui/material';

/**
 * Custom Button component that wraps the MUI Button component.
 * @param {ButtonProps} props - Props for configuring the button.
 * @returns {JSX.Element} The custom Button component.
 */

interface ButtonProps {
  onClick: () => void;
  text?: string;
  styleProps?: object;
  disabled?: boolean;
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  styleProps,
  disabled,
  variant = 'text',
  color = 'primary',
  fullWidth = false,
}) => (
  <MuiButton
    disabled={disabled}
    variant={variant}
    color={color}
    onClick={onClick}
    fullWidth={fullWidth}
    sx={styleProps}
  >
    {text}
  </MuiButton>
);

export default Button;
