import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [filterKey, setFilterKey] = useState("");

  //initial fetch to render all stocks
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data))
  }, [])

  // function to buy a stock and add to portfolio
  function handleBuyStock(purchasedStock){
    setPurchasedStocks([...purchasedStocks, purchasedStock])
  }
  // function to sell stock in portfolio and remove from portfolio
  function handleSellStock(soldStock){
    const updatedStocks = purchasedStocks.filter((stock) => stock.id !== soldStock.id)
    setPurchasedStocks(updatedStocks)
  }

  function handleSort(category){
    if(category === "Alphabetically") {
      setSortKey("name")
    }
    if(category === "Price") {
      setSortKey("price")
    }
  }
  function handleFilter(event) {
    setFilterKey(event)
  }

  const filteredStocks = [...stocks].filter(stock => {
    if (filterKey === ""){
      return true
    } 
    else return stock.type === filterKey
  })

  const sortedStocks = [...filteredStocks].sort((a, b) => {
      if (!sortKey) return 0;
      if (a[sortKey] > b[sortKey]) return 1
      if (a[sortKey] < b [sortKey]) return -1
    })



  return (
    <div>
      <SearchBar handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} handleBuyStock={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer purchasedStocks={purchasedStocks} handleSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
