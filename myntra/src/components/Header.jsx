import React from 'react'
import { FaUser, FaShoppingBag, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <div className="logo_container">
                <Link to={'/'}><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
            </div>
            <nav className="nav_bar">
                <Link >Men</Link>
                <Link >Women</Link>
                <Link >Kids</Link>
                <Link >Home & Living</Link>
                <Link >Beauty</Link>
                <Link >Studio <sup>New</sup></Link>
            </nav>
            <div className="search_bar">
                <span className="material-symbols-outlined search_icon">Search</span>
                <input className="search_input" placeholder="Search for products, brands and more" />
            </div>
            <div className="action_bar">
                <div className="action_container">
                    <FaUser />
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    <FaRegHeart />
                    <span className="action_name">Wishlist</span>
                </div>

                <Link to={'/bag'} className="action_container" >
                    <FaShoppingBag />
                    <span className="action_name">Bag</span>
                    <span className="bag-item-count">0</span>
                </Link>
            </div>
        </header>
    )
}

export default Header