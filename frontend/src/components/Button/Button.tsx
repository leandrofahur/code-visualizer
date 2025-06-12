interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) => {
  const baseStyles = 'p-2 rounded-md w-[150px] text-white';
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}; 