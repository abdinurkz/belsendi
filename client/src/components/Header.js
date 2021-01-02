import React, {useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { current } from '../store/auth/auth.action';
import { connect } from 'react-redux';
import styled from 'styled-components'

const StyledHeader = styled.header`
    background: #627CFF;
    color: #fff;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1140px;
    margin: 0 auto;
    
    .list {
        list-style: none;
        display: flex;
        justify-content: space-between;
        min-width: 324px;
        padding: 0;
        margin: 0;
    }
    
    .brand-logo {
        margin: 0;
        font-size: 26px;
    }
    
    .list li a, .brand-logo a, .login {
        text-decoration: none;
        color: #fff;
    }
    
    .login {
        border: 1px solid #fff;
        padding: 4px 8px;
    }
    
    .login:hover {
        background: #fff;
        color: #627CFF;
        transition: 3ms background ease-in-out;
    }
`

const Header = (props) => {

    useEffect(() => {
        if (props.isAuthenticated) {
            props.current()
        }
    }, [props])


    return (
        <StyledHeader>
            <StyledNav>
                <h4 className="brand-logo">
                    <Link to="/">BELSENDI</Link>
                </h4>
                <ul className="list">
                    <li><NavLink to="/digests">DIGESTS</NavLink></li>
                    <li><NavLink to="/surveys">SURVEYS</NavLink></li>
                    <li><NavLink to="/interests">INTERESTS</NavLink></li>
                </ul>
                { props.isAuthenticated ? null : <NavLink to="/login" className="login">SIGN IN</NavLink> }

            </StyledNav>
        </StyledHeader>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user,
})

export default connect(mapStateToProps, {
    current
})(Header)
