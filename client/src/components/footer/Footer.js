import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = (props) => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <NavLink to="/">&copy; 2020 BELSENDI</NavLink>
                <ul className="footer__list">
                    <li><NavLink to="/terms">Terms</NavLink></li>
                    <li><NavLink to="/cookies">Cookies</NavLink></li>
                    <li><NavLink to="/policy">Privacy Policy</NavLink></li>
                    <li><NavLink to="/information">Advertising Information</NavLink></li>
                </ul>
            </nav>
        </footer>
    )
};


export default Footer
