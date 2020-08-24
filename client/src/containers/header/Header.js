import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
        <header className="header">
            <nav className="nav">
                <h4 className="brand-logo">
                    <a>BELSENDI</a>
                </h4>
                <ul className="list">
                    <li><a>DIGEST</a></li>
                    <li><a>INTERESTS</a></li>
                    <li><a>FAVORITES</a></li>
                </ul>
                <a className="login">SIGN IN</a>
            </nav>
        </header>
    )
};


export default Header
