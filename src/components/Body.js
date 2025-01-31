import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.544893&lng=81.521241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    // Extract restaurants data
    const restaurantsData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 text-xl mt-10">
        You are offline. Please check your connection.
      </h1>
    );
  }

  if (!Array.isArray(listOfRestaurants) || listOfRestaurants.length === 0) {
    return <Shimer />;
  }

  return (
    <div className="body container mx-auto p-4">
      {/* Filter Section */}
      <div className="filter flex flex-wrap gap-4 justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="search flex items-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-700 w-full sm:w-80"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <button
          className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Reset Filter */}
        <button
          className="bg-gray-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-700 transition duration-300"
          onClick={() => setFilteredRestaurants(listOfRestaurants)}
        >
          Reset Filters
        </button>
      </div>

      {/* Restaurant Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="hover:scale-105 transform transition duration-300"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Body;
