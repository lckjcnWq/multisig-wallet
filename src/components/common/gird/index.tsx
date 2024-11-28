interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <div className={`
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4
      sm:gap-6
      md:gap-8
      ${className || ''}
    `}>
      {children}
    </div>
  );
};

const TokenGrid = () => {
    return (
        <Grid>
            <TokenCard tokenName="ETH" tokenSymbol="1.234" />
            <TokenCard tokenName="USDT" tokenSymbol="5.678" />
            <TokenCard tokenName="DAI" tokenSymbol="9.012" />
        </Grid>
    )
}

const TokenCard = ({ tokenName, tokenSymbol }: { tokenName: string, tokenSymbol: string }) => {
    return (
        <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
                <span className="text-white">{tokenName}</span>
                <span className="text-green-400">{tokenSymbol}</span>
            </div>
        </div>
    )
}

export default TokenGrid;