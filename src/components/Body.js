import { useEffect, useState } from "react";
import { RestoList } from "../config";
import RestroCard from "./RestroCard";



function filterData(searchText, restaurants) {

  const fliterDAta = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText));

  return fliterDAta;
}

const Body = () => {

  // SearchText is local state var
  const [restaurants, setRestaurents] = useState(RestoList);
  const [searchText, setSearchText] = useState(); // to create state var;


  useEffect(() => {
    //api call
    getRestaurants()},
      []
  );

  async function getRestaurants() { 
    // using swiggy data api
      const response = await fetch(" https://www.swiggy.com/mapi/homepage/getCards?lat=18.4845483&lng=73.8440017");
      const json = await response.json();

      // optional chaning
      // set data from api
      setRestaurents(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
       
  }

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
          const data = filterData(searchText, restaurants);
          // update the state - Restaurents
          setRestaurents(data)


        }}>Search
        </button>
      </div>

      <div className="Restro-List">
        {restaurants.map((restaurant) => {
          return <RestroCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
