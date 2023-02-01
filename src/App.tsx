import { CoinDisplay } from './components/CoinDisplay'
import { useState, useEffect } from 'react'
import './styles/global.css'
import axios from 'axios'

export function App() {

  const [listOfCoins, setListOfCoins] = useState<any[]>([])

  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0')
    .then(reponse => {
      setListOfCoins(reponse.data.coins)
    })
  }, [])

  const [searchInput, setSearchInput] = useState('')

  const filteredCoins = listOfCoins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(searchInput.toLowerCase()) || coin.symbol.toLowerCase().includes(searchInput.toLowerCase())
      )
    })

  return (
    <div className="m-0 p-0 bg-gray-900">
      <div className="flex w-full h-28 bg-myblack items-center justify-center fixed top-0 p-0">
            <label htmlFor="search" className="text-white md:text-2xl lg:text-3xl"> Search for a coin: </label>
            <div className="flex flex-row mt-1 h-10">
                <input type="text" 
                    name="search"
                    className="ml-4 p-2 w-full border rounded-lg border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent"
                    onChange={(event) => {
                        setSearchInput(event.target.value)
                    }}
                />
            </div>
        </div>

      <div className="flex flex-row flex-wrap justify-center items-center mt-28 mb-16 p-0">
      {
        filteredCoins.map((coin) => {
          return(
            <CoinDisplay key={coin.symbol} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
            )      
        })
      }
      </div>

    </div>
  )
}
