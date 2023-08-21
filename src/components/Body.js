import { useState } from "react";
import { RestoList } from "../config";
import RestroCard from "./RestroCard";



function filterData (searchText,restaurants){

  const fliterDAta= restaurants.filter((restaurant) => 
             restaurant.data.name.includes(searchText));

             return fliterDAta;
}

const Body = () => {

  // SearchText is local state var
  const [restaurants , setRestaurents] = useState(RestoList);
  const [searchText, setSearchText] = useState(); // to create state var;


  return (
    <>
      {/* input */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
 
        <button className="search-btn" onClick={() => {
          // filter data
          const data =  filterData(searchText,restaurants);

          // update the state - Restaurents
           
            setRestaurents(data)
          

        }}>
          Search
          </button>
      </div>

      <div className="Restro-List">
        {restaurants.map((restaurant) => {
          return <RestroCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
