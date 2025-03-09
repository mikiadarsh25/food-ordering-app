import constants from "../utils/constants";
import { useState, useEffect } from "react";
// Header
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constants.logo} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-button">Login</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
