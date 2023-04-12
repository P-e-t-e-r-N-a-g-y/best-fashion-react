import React, { useRef } from "react";
import './Navbar.css';

function Navbar() {
    return (
    <div className="nav-bar-container">
        <div className="nav-bar-left">
            <div className="nav-bar-element"><h1>Best Fashion</h1></div>
        </div>
        <div className="nav-bar-center">
            <p className="nav-bar-element">WHAT'S NEW</p>
            <p className="nav-bar-element">WOMEN</p>
            <p className="nav-bar-element">MEN</p>
        </div>
        <div className="nav-bar-right">
            <div className="nav-bar-element">
                <input  className="search-text" type="text" placeholder="Search..." />
                <button className="search-button" ><img className="icons" src="/search.png" alt="img" /></button>
            </div>
            <div className="nav-bar-element login-btn"><img className="icons" src="/user_icon.png" /></div>
            <div className="nav-bar-element"><img className="icons" src="/heart.png" /></div>
            <div className="nav-bar-element"><img className="icons" src="/basket.png" /><span className="counter">0</span></div>
        </div>
    </div>
    )
}

export default Navbar;