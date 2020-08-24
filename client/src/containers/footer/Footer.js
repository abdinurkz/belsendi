import React from "react";
import "./Footer.css"

const Footer = (props) => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <a>&copy; 2020 BELSENDI</a>
                <ul className="footer__list">
                    <li><a>Terms</a></li>
                    <li><a>Cookies</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Advertising Information</a></li>
                </ul>
            </nav>
        </footer>
    )
};


export default Footer
