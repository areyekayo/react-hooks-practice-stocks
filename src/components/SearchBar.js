import React from "react";

function SearchBar({handleSort, handleFilter}) {
  // const [isNameChecked, setIsNameChecked] = useState(false)
  // const [isPriceChecked, setIsPriceChecked] = useState(false)

  // function handleNameCheck(event){
  //  // console.log(event.target.value)
  //   setIsNameChecked(!isNameChecked)
  //   handleSort(event.target.value)
  // }

  // function handlePriceCheck(event){
  //   setIsPriceChecked(!isPriceChecked)
  //   handleSort(event.target.value)
  // }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={(e) => handleSort(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={(e) => handleSort(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
