import { create } from 'zustand';
import axios from 'axios';

const homeStore = create((set) => ({

    coins: [],

    fetchCoins: async () => {
        const result = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const resCoins = result.data.coins.map(coin => {
            return{
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBtc: coin.item.price_btc,
            }
        })
        set({coins: resCoins});  
    }
}))

export default homeStore;