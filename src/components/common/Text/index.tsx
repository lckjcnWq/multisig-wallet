interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={`
      text-sm 
      sm:text-base 
      md:text-lg
      leading-relaxed
      ${className || ''}
    `}>
      {children}
    </p>
  );
}; 