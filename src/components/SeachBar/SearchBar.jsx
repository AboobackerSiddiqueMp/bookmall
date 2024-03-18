import { useState } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";
// import useDebounce from "../../hooks/useDebounce";
const SearchBar = ({ setFilterList }) => {
  // const debounceSearchWord = useDebounce(searchWord, 300);
  
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={(e)=>{setFilterList(e.target.value)}} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
