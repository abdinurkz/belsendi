import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { register } from '../../../store/actions/auth.action'
import Humans from "../left-side/Humans";
import "../auth.css"

const Register = (props) => {

    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = state;
        if(password !== password2){
            console.log("password don't match");
        } else {
            const newUser = {
                username,
                password,
                email
            };
            props.register(newUser);
        }
    };

    const onChange = e => setState({ [e.target.name]: e.target.value });

    if(props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = state;

    return (
        <div className="container">
            <Humans/>
            <div className="right-side">
                <h2 className="title">WELCOME, <b>BELSENDI!</b></h2>
                <form className="login-fields" onSubmit={onSubmit}>
                    <h3 className="login-text">Registration</h3>
                    <input type="text" placeholder="Username" className="text-field" name="username" onChange={onChange} value={username} onfocus="this.value=''"/>
                    <input type="text" placeholder="Email" className="text-field" name="email" onChange={onChange} value={email} onfocus="this.value=''" id="password"/>
                    <input type="password" placeholder="Password (at least 8 characters)" className="text-field" name="password" onChange={onChange} value={password} onfocus="this.value=''" id="password"/>
                    <input type="password" placeholder="Repeat your password" className="text-field" name="password2" onChange={onChange} value={password2} onfocus="this.value=''" id="password"/>
                    <div className="buttons-sign-up">
                        <button id="sign-in" type="submit">Sign Up</button>
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

export default connect(mapStateToProps, { register })(Register);
