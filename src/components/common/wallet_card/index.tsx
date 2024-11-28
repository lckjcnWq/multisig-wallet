interface WalletCardProps {
  children: React.ReactNode;
  className?: string;
}

export const WalletCard: React.FC<WalletCardProps> = ({ children, className }) => {
  return (
    <div className={`
      p-4
      sm:p-6
      md:p-8
      rounded-xl
      shadow-md
      w-full
      sm:max-w-sm
      md:max-w-md
      mx-auto
      ${className || ''}
    `}>
      {children}
    </div>
  );
};

export default WalletCard;