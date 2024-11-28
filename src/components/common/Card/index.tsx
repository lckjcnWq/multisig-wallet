interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`
      p-4
      sm:p-6
      md:p-8
      rounded-xl
      shadow-lg
      w-full
      sm:w-auto
      ${className || ''}
    `}>
      {children}
    </div>
  );
};

export default Card; 