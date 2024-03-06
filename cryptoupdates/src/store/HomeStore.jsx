import { create } from 'zustand'
import axios from 'axios'

const HomeStore = create((set) => ({

    coins: [],
    // a promise things so async to wait  
    fetchCoins: async () => {

        const res = axios.get("https://pro-api.coingecko.com/api/v3/search/trending");

        const coinsRes = res.data.coins.map(coinIndividual => {
            return {
                name: coinIndividual.item.name,
                image: coinIndividual.item.large,
                id: coinIndividual.item.id,
                priceBtc: coinIndividual.item.price_btc
            }
        })

        set({ coins: coinsRes })
    }

}))

export default HomeStore;