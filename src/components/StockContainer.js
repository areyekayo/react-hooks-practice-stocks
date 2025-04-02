import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBuyStock}) {

  function onBuyStock(stock) {
    handleBuyStock(stock)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => <Stock key={stock.id} stock={stock} onBuyStockClick={onBuyStock} isPurchased={false} />)}
    </div>
  );
}

export default StockContainer;
