import React from "react";
import './Header.css'
import { Link } from "react-router-dom";



function Header(){
    return (
        <div className="header">
            <h2>VK Tech</h2>
            <div className="headcont">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Header;