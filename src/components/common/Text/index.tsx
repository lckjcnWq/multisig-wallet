interface TextProps {
  variant?: 'primary' | 'secondary' | 'warning';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

const Text = ({ variant = 'primary', size = 'md', children, className }: TextProps) => {
  const variantStyles = {
    primary: 'text-white',
    secondary: 'text-gray-400',
    warning: 'text-yellow-400'
  };

  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl'
  };

  return (
    <p className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  );
};

export default Text; 