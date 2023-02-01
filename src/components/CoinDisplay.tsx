

export function CoinDisplay({name, icon, price, symbol}:any) {
    return (
        <div className="flex flex-col w-full h-80 lg:w-80 lg:h-80 bg-myblack mx-4 my-4 rounded-lg hover:ring-4 hover:ring-indigo-500 justify-center text-white">
            <div className="flex flex-col h-full w-full items-center justify-evenly">
                <h1 className="font-extrabold text-2xl"> {name} </h1>
                <img src={icon} alt="Coin icon" width={70}/>
                <span className="font-bold"> Symbol: {symbol} </span>
                <span className="font-bold"> Price: {price} </span>
            </div>
        </div>
    )
}