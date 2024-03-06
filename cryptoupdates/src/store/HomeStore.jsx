import { create } from 'zustand';
import axios from 'axios';

const homeStore = create((set) => ({
  
    fetchCoins: async () => {
        const result = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        console.log(result);
    }
}))

export default homeStore;