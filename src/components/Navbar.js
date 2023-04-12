import React, { useRef } from "react";
import './Navbar.css';
import { IoBasketOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    return (
    <div className="nav-bar-container">
        <div className="nav-bar-left">
            <div className="nav-bar-element-left"><h1>Best Fashion</h1></div>
            <div className="nav-bar-element-left">
                <img className="favicon-img" src="/favicon.png"></img>
            </div>
            <button className="nav-bar-element-left nav-toggle">
                <RxHamburgerMenu class="hamburger" />
            </button>
        </div>
        <div className="nav-bar-center">
            <p className="nav-bar-element">WHAT'S NEW</p>
            <p className="nav-bar-element">WOMEN</p>
            <p className="nav-bar-element">MEN</p>
        </div>
        <div className="nav-bar-right">
            <div className="nav-bar-element-right">
                <input  className="nav-bar-element-search search-text" type="text" placeholder="Search..." />
                <button className="nav-bar-element-search search-button" >
                    <AiOutlineSearch className="icons" />
                </button>
            </div>
            <div className="nav-bar-element-right login-btn">
                <CgProfile className="icons" />
            </div>
            <div className="nav-bar-element-right">
                <AiOutlineHeart className="icons" />
            </div>
            <div className="nav-bar-element-right">
                <IoBasketOutline className="icons" />
                <span className="counter">
                    0
                </span>
            </div>
        </div>
    </div>
    )
}

export default Navbar;