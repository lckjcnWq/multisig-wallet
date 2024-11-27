interface CardProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Card = ({ variant = 'primary', children, className }: CardProps) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-gray-800',
    secondary: 'bg-gray-900'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card; 