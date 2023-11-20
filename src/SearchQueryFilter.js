import React, { useState } from "react";

export default function SearchQueryFilter() {
  const fruits = [
    "Apple",
    "Mango",
    "Banana",
    "Pineapple",
    "Dragon fruit",
    "Grapes",
    "pears",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  function handleSearch(e) {
    setSearchTerm(e.target.value);

    const filtering = fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredFruits(filtering);
  }

  return (
    <div style={{ marginLeft: "20%", marginTop: "2%" }}>
      <form>
        <label htmlFor="search">Search : </label>
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </form>
      <div>
        {filteredFruits &&
          filteredFruits.map((fruit, index) => {
            return (
              <ul key={index}>
                <li>{fruit}</li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
