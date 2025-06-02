import React from "react";

function Stock({stock, onBuyStock, onSellStock, isPurchased}) {
  const {id, ticker, name, type, price} = stock

  //function to handle click: sell or buy stock depending on isPurchased prop
  function handleClick(){
    if (isPurchased) {
      onSellStock(stock)
    }
    else {
      onBuyStock(stock)
    }
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker} : {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
