import RestaurantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";

// Body
const Body = () => {
    return (
        <div className="body">
            <div className="search-box-container">
                <div className="search-box">
                    <input type="text" />
                </div>
                <div className="search-button">
                    <button> Search</button>
                </div>
            </div>

            <div className="restro-card-container">
                {restaurantList.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
