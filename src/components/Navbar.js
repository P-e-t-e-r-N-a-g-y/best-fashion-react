import React, { useRef } from "react";
import './Navbar.css';
import { IoBasketOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div className="nav-bar-container">
        <div className="nav-bar-left">
            <div className="nav-bar-element-left"><h1><Link to="/">Best Fashion</Link></h1></div>
            <div className="nav-bar-element-left">
                <img className="favicon-img" src="/favicon.png"></img>
            </div>
            <button className="nav-bar-element-left nav-toggle">
                <RxHamburgerMenu class="hamburger" />
            </button>
        </div>
        <div className="nav-bar-center">
            <p className="nav-bar-element"><Link to="/new">WHAT'S NEW</Link></p>
            <p className="nav-bar-element"><Link to="/items">WOMEN</Link></p>
            <p className="nav-bar-element"><Link to="/items">MEN</Link></p>
        </div>
        <div className="nav-bar-right">
            <div className="nav-bar-element-right">
                <input  className="nav-bar-element-search search-text" type="text" placeholder="Search..." />
                <button className="nav-bar-element-search search-button" >
                    <AiOutlineSearch className="icons" />
                </button>
            </div>
            <div className="nav-bar-element-right login-btn">
            <Link to="/login"><CgProfile className="icons" /></Link>
            </div>
            <div className="nav-bar-element-right">
            <Link to="/favourite"><AiOutlineHeart className="icons" /></Link>
            </div>
            <div className="nav-bar-element-right">
            <Link to="/basket"><IoBasketOutline className="icons" /></Link>
                <span className="counter">
                    0
                </span>
            </div>
        </div>
    </div>
    )
}

export default Navbar;