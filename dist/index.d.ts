import React from 'react';

interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
