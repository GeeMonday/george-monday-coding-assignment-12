// Button.tsx

import React from 'react';
import './Button.css'

// Define the ButtonProps interface
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void; // Optional onClick handler
}

// Define the Button component using the ButtonProps interface
const Button: React.FC<ButtonProps> = ({ label, size = 'medium', onClick }) => {
  return (
    <button className={`button ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
