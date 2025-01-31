import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    isOpen,
  } = resData.info;

  return (
    <div className="max-w-sm w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-40 mb-4">
        <img
          className="w-full h-full object-cover rounded-md"
          src={CDN_URL
            + 
           resData.info.cloudinaryImageId
          }
          alt="res-logo" 
        />
        {/* Rating Badge */}
        <div
          className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-md shadow ${
            avgRating >= 4
              ? "bg-green-600 text-white"
              : avgRating >= 3
              ? "bg-yellow-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {avgRating} ★
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-3">
        {/* Restaurant Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>

        {/* Status and Cost */}
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-md ${
              isOpen
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isOpen ? "Open" : "Closed"}
          </span>
          <span className="text-sm font-semibold text-gray-700">
            {costForTwo}
          </span>
        </div>

        {/* Locality */}
        <p className="text-sm text-gray-400 truncate">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
