import React from 'react';
import './Button.css';
export interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
