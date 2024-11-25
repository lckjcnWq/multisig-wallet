import reactLogo from '../../assets/react.svg';

const WalletHeader = () => {
    return ( 
        <div className="flex justify-between items-center p-4 bg-gray-800 rounded-t-lg">
            <div className="flex items-center space-x-2">
                <img src={reactLogo} className="w-6 h-6" />
                <h1 className="text-white text-lg font-bold">我的钱包</h1>
            </div>

            <div className='flex flex-col items-end'>
                <span className='text-white text-sm'>总余额</span>
                <span className='text-white font-bold'>1.234 ETH</span>
            </div>
        </div>
    )
}

export default WalletHeader;