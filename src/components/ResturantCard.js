// RestaurantCard
const RestaurantCard = props => {
    const { restaurant } = props;
    const { name, cuisines, cloudinaryImageId, deliveryTime, avgRating } =
        restaurant;
    return (
        <div className="restro-card">
            <img
                src={cloudinaryImageId}
                alt="Restaurant"
                className="restro-image"
            />
            <h3>{name}</h3>
            <div className="restro-info">
                <p className="cuisine">{cuisines}</p>
                <div className="rating">⭐ {avgRating}</div>
                <p className="delivery-time">{deliveryTime}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
