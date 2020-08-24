import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../../store/actions/auth.action'
import { connect } from 'react-redux'
import '../auth.css'
import Humans from "../Humans";

const Login = (props) => {

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const onSubmit = e => {
        e.preventDefault();
        props.login(state.username, state.password);
    };

    const onChange = e => setState({ [e.target.name]:e.target.value });


    if (props.isAuthenticated) {
        return <Redirect to="/"/>;
    }
    const { username, password} = state;

    return (
        <div className="container">
            <Humans/>
            <div className="right-side">
                <h2 className="title">WELCOME, <b>BELSENDI!</b></h2>
                <form className="login-fields" onSubmit={onSubmit}>
                    <h3 className="login-text">Login</h3>
                    <input type="text" placeholder="Username"  className="text-field" name="username" onChange={onChange} value={username} />
                    <input type="password" placeholder="Password" className="text-field" name="password" onChange={onChange} value={password} id="password"/>
                    <div className="check">
                        <input type="checkbox" className="remember"/>
                        <label htmlFor="remember">Remember me</label>
                        <label id="forgot">Forgot password?</label>
                    </div>
                    <div className="buttons">
                        <button id="sign-in" type="submit">Sign In</button>
                    </div>
                    <div className="sign-up-page">
                        <label>Need an account?</label>
                        <NavLink className="sign-up-btn" to="/register">Sign Up</NavLink>
                    </div>
                </form>
                <label className="policy">Privacy Policy</label>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
