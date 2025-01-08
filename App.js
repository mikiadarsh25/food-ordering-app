import React from "react";
import ReactDOM from "react-dom/client";

const restaurantList = [
    {
        id: 19776251,
        name: "Biryani Zest",
        cuisines:
            "Biryani, Andhra, North Indian, Chinese, Kebab, Seafood, Desserts, Beverages",
        avgRating: "4.1",
        deliveryTime: "51 min",
        costForTwo: "₹1,000 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/pictures/1/19776251/f0e324519d2865b41c70721f24e60775_o2_featured_v2.jpg"
    },
    {
        id: 51639,
        name: "Meghna Foods",
        cuisines: "Biryani, Andhra, North Indian, Seafood",
        avgRating: "4.4",
        deliveryTime: "27 min",
        costForTwo: "₹1,000 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/dish_photos/538/ba126a2b14f50dddf388d2ce8cf56538.jpg"
    },
    {
        id: 20408899,
        name: "Blends Of Biryani",
        cuisines: "Biryani, Chinese, Mughlai",
        avgRating: "4.3",
        deliveryTime: "57 min",
        costForTwo: "₹300 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/pictures/9/20408899/6d9f4dfd5e237088e7410784fc8a57c8_o2_featured_v2.jpg"
    },
    {
        id: 50407,
        name: "Ebony",
        cuisines:
            "North Indian, Biryani, South Indian, Thai, Seafood, Desserts, Beverages",
        avgRating: "4.3",
        deliveryTime: "40 min",
        costForTwo: "₹1,900 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/dish_photos/270/ea6071366807403a80cd004594383270.jpeg"
    },
    {
        id: 19282473,
        name: "Nandhini Deluxe",
        cuisines: "Andhra, Biryani, North Indian",
        avgRating: "4.1",
        deliveryTime: "26 min",
        costForTwo: "₹1,400 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/dish_photos/505/a1765e8af42f2a0d1bbc13a726b56505.jpg"
    },
    {
        id: 21460039,
        name: "Maffei Kitchen",
        cuisines: "Mediterranean, Lebanese, Greek",
        avgRating: "4.1",
        deliveryTime: "30 min",
        costForTwo: "₹1,000 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/pictures/9/21460039/a493d81a1991e48bdb4120daddcdcd6c_o2_featured_v2.jpg"
    },
    {
        id: 50141,
        name: "Bheema's",
        cuisines: "Andhra, Biryani, South Indian",
        avgRating: "4.0",
        deliveryTime: "29 min",
        costForTwo: "₹950 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/pictures/1/50141/925e2898e60ac51d3c1f31ac4361054a_o2_featured_v2.jpg"
    },
    {
        id: 18391029,
        name: "Chakum Chukum",
        cuisines: "Rolls, North Indian, Fast Food, Biryani, Kebab, Beverages",
        avgRating: "3.4",
        deliveryTime: "48 min",
        costForTwo: "₹400 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/pictures/9/18391029/d1772f87b062c0a4acf8d2b7b0900a48_o2_featured_v2.jpg"
    },
    {
        id: 50046,
        name: "Anupam's Coast II Coast",
        cuisines: "Seafood, South Indian, Chinese, Mangalorean, Oriental",
        avgRating: "4.4",
        deliveryTime: "33 min",
        costForTwo: "₹1,700 for two",
        cloudinaryImageId:
            "https://b.zmtcdn.com/data/pictures/7/50407/9f4aa5f6ff75e634725b1d93943d0a2c_o2_featured_v2.jpg"
    }
];

/**
 * Header
 *  - Logo
 *  - Navigation Items
 *
 * Body
 *  - Search Bar
 *  - RestroCard Container
 *    - Restro cards
 *
 * Footer
 *   - CopyRight
 *   - Contact Us
 *   - Links
 *   - Address
 */

// Header
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuIvfprHHWdddhcsFSxe-mpoOqoeHHUhgsw&s"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

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

// RestaurantCard

const RestaurantCard = props => {
    console.log(props);
    return (
        <div className="restro-card">
            <img
                src={props.restaurant.cloudinaryImageId}
                alt="Restaurant"
                className="restro-image"
            />
            <h3>{props.restaurant.name}</h3>
            <div className="restro-info">
                <p className="cuisine">{props.restaurant.cuisines}</p>
                <div className="rating">⭐ {props.restaurant.avgRating}</div>
                <p className="delivery-time">{props.restaurant.deliveryTime}</p>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
