import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchedItem] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItem(event.target.value);
  }


  const itemsNewArray = items.map((item) => item.name)
  console.log(itemsNewArray)

  function realTimeSearch() {
    const itemsNewArray = items.map((item) => item.name)
    itemsNewArray.map((itemName) => {
      const splittedItem = itemName.split()
      if (splittedItem === )
    })
    
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchItem === "") return true;
    
    return item.category === selectedCategory || item.name === searchItem;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
