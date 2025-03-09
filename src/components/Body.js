import { useState, useEffect } from "react";
import RestaurantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Use a CORS proxy service
        const swiggyUrl =
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
            swiggyUrl
        )}`;

        const response = await fetch(proxyUrl);
        const jsonData = await response.json();
        const swiggyData = formatRestaurantData(jsonData);
        setRestaurants(swiggyData);
    };

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search-box-container">
                <div className="search-box">
                    <input type="text" />
                </div>
                <div className="search-button">
                    <button>Search</button>
                </div>
            </div>

            <div className="filter">
                <button
                    onClick={() => {
                        const filterRestaurants = restaurants.filter(
                            res => res.avgRating > 4
                        );
                        setRestaurants(filterRestaurants);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restro-card-container">
                {restaurants.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

const formatRestaurantData = apiResponse => {
    try {
        const topRestaurantsCard = apiResponse.data.cards.find(
            card => card.card?.card?.id === "top_brands_for_you"
        );
        const restaurantListCard = apiResponse.data.cards.find(
            card => card.card?.card?.id === "restaurant_grid_listing"
        );
        const topRestaurants =
            topRestaurantsCard?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];
        const recommendedRestaurants =
            restaurantListCard?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];

        const allRestaurants = [...topRestaurants, ...recommendedRestaurants]
            .filter(
                (restaurant, index, self) =>
                    index ===
                    self.findIndex(r => r.info.id === restaurant.info.id)
            )
            .map(restaurant => {
                const info = restaurant.info;
                return {
                    id: parseInt(info.id),
                    name: info.name,
                    cuisines: info.cuisines.join(", "),
                    avgRating: info.avgRating,
                    deliveryTime: info.sla.slaString,
                    costForTwo: info.costForTwo,
                    cloudinaryImageId: info.cloudinaryImageId.startsWith("http")
                        ? info.cloudinaryImageId
                        : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`
                };
            });

        return allRestaurants;
    } catch (error) {
        console.error("Error formatting restaurant data:", error);
        return [];
    }
};

export default Body;
