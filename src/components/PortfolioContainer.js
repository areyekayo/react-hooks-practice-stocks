import React from "react";
import Stock from "./Stock";

function PortfolioContainer({purchasedStocks, handleSellStock}) {

  function onSellStock(stock){
    handleSellStock(stock)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {purchasedStocks.map((stock) => <Stock key={stock.id} stock={stock} onSellStock={onSellStock} isPurchased={true} />)
      }
    </div>
  );
}

export default PortfolioContainer;
