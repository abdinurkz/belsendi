import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = (props) => {
    return (
        <header className="header">
            <nav className="nav">
                <h4 className="brand-logo">
                    <Link to="/">BELSENDI</Link>
                </h4>
                <ul className="list">
                    <li><NavLink exact to="/posts">POSTS</NavLink></li>
                    <li><NavLink to="/digests">DIGESTS</NavLink></li>
                    <li><NavLink to="/surveys">SURVEYS</NavLink></li>
                    <li><NavLink to="/petitions">PETITIONS</NavLink></li>
                </ul>
                <NavLink to="/login" className="login">SIGN IN</NavLink>
            </nav>
        </header>
    )
};


export default Header
