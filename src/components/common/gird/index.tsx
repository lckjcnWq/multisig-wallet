const TokenGrid = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <TokenCard tokenName="ETH" tokenSymbol="1.234" />
            <TokenCard tokenName="USDT" tokenSymbol="5.678" />
            <TokenCard tokenName="DAI" tokenSymbol="9.012" />
        </div>
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