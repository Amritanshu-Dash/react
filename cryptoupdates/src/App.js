import React from "react";
import HomeStore from "./store/HomeStore";


function App() {

  const Store = HomeStore()
  React.useEffect( ()=> {Store.fetchCoins()})
  return (
    <div>
      {Store.coins.map(coin => {
        return(
          <div key={coin.id}> {coin.id} jjfd {coin.name}</div>
        )
      })}
    </div>
  );
}

export default App;
