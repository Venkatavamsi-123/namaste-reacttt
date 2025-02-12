import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from "./Shimer";
import RestaurantCategory from "./RestaurantCategory";

import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Restaurant Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-600 mt-2">
          {cuisines.join(", ")} - <span>{costForTwoMessage}</span>
        </p>
      </div>

      {/* Menu Heading */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">
        Menu
      </h2>

      {/* Categories List */}
      <div className="space-y-6">
        {categories.map((category, index) => (
          <RestaurantCategory key={index} data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;



