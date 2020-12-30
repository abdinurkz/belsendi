import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin-top: auto;
    background: #627CFF;
    color: white;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const StyledFooterNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1140px;
    margin: 0 auto;
    
    a {
        text-decoration: none;
        color: #fff;
    }
`
const StyledFooterList = styled.ul`
    display: flex;
    justify-content: space-between;
    min-width: 473px;
    list-style: none;
    padding: 0;
    margin: 0;
    
    li a {
        text-decoration: none;
        color: #fff;
    }
`

const Footer = (props) => {
    return (
        <StyledFooter>
            <StyledFooterNav>
                <NavLink to="/">&copy; 2020 BELSENDI</NavLink>
                <StyledFooterList>
                    <li><NavLink to="/terms">Terms</NavLink></li>
                    <li><NavLink to="/cookies">Cookies</NavLink></li>
                    <li><NavLink to="/policy">Privacy Policy</NavLink></li>
                    <li><NavLink to="/information">Advertising Information</NavLink></li>
                </StyledFooterList>
            </StyledFooterNav>
        </StyledFooter>
    )
};


export default Footer
