interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2
        sm:px-6 sm:py-3
        md:px-8 md:py-4
        text-sm sm:text-base
        rounded-lg
        transition-all
        ${className || ''}
      `}
    >
      {children}
    </button>
  );
}; 