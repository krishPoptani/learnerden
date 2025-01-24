import React, { MouseEvent } from 'react';

interface CustomButtonProps {
  label: string;
  bgColor?: keyof typeof colorPalette | string; 
  color?: keyof typeof colorPalette | string; 
  rounded?: string; // Optional prop for custom border-radius
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void; // Correct type
}

const colorPalette = {
  primary: '#1E3A8A', // Tailwind Blue-900
  secondary: '#4A3AFF', 
  danger: '#DC2626', // Tailwind Red-600
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  bgColor = 'primary',
  color = 'primary',
  rounded = 'rounded-3xl', // Default rounded value
  disabled = false,
  onClick,
}) => {
  const baseStyles = `px-6 py-4 font-medium transition duration-300 ease-in-out`;
  const disabledStyles = `opacity-50 cursor-not-allowed`;

  return (
    <button
      className={`${baseStyles} ${rounded} ${disabled ? disabledStyles : ''}`}
      style={{
        backgroundColor: colorPalette[bgColor as keyof typeof colorPalette] || bgColor,
        color: colorPalette[color as keyof typeof colorPalette] || color,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;


