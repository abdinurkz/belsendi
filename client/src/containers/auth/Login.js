import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { login } from '../../store/auth/auth.action'
import { connect } from 'react-redux'
import './auth.css'
import AuthContent from "./AuthContent";
import styled from 'styled-components'

const RegisterButton = styled.button`
    background: none;
    border: none;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-decoration: none;
`
const RegisterPage = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-evenly;
    margin: 0px 150px 100px;
    font-size: 20px;
`

const Login = (props) => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const onSubmit = e => {
        e.preventDefault();
        props.login(state);
    };

    const onChange = e => setState({ ...state, [e.target.name]: e.target.value });


    if (props.isAuthenticated) {
        return <Redirect to="/"/>;
    }
    const { email, password} = state;

    return (
        <AuthContent>
            <form className="login-fields" onSubmit={onSubmit}>
                <h3 className="login-text">Login</h3>
                <input type="text" placeholder="Email" autoComplete="off" className="text-field" name="email" onChange={onChange} value={email} />
                <input type="password" placeholder="Password" autoComplete="off" className="text-field" name="password" onChange={onChange} value={password}/>
                <div className="check">
                    <input type="checkbox" className="remember"/>
                    <label htmlFor="remember">Remember me</label>
                    <label id="forgot">Forgot password?</label>
                </div>
                <div className="buttons">
                    <button id="sign-in" type="submit">Sign In</button>
                </div>
                <RegisterPage>
                    <label>Need an account?</label>
                    <RegisterButton className="sign-up-btn" to="/register">Sign Up</RegisterButton>
                </RegisterPage>
            </form>
        </AuthContent>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
