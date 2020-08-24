import React, { Component } from 'react'
import first from '../../images/1.svg'
import second from '../../images/2.svg'
import third from '../../images/3.svg'
import fourth from '../../images/4.svg'
import fifth from '../../images/5.svg'
import '../../styles/auth.css'
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../reducers/auth'

export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if(password !== password2){
            console.log("password don't match");
        } else {
            const newUser = {
                username,
                password,
                email
            };
            this.props.register(newUser);
        }
    };

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <div className="container">
                <div className="left-side">
                    <img src={first} className="first" alt="Not Found"/>
                    <img src={second} className="second" alt="Not Found"/>
                    <img src={third} className="third" alt="Not Found"/>
                    <img src={fourth} className="fourth" alt="Not Found"/>
                    <img src={fifth} className="fifth" alt="Not Found"/>
                    <label className="develdt">Powered by Develdt Agency</label>
                </div>
                <div className="right-side">
                    <h2 className="title">WELCOME, <b>MOVIESTAR!</b></h2>
                    <form className="login-fields" onSubmit={this.onSubmit}>
                        <h3 className="login-text">Registration</h3>
                        <input type="text" placeholder="Username" className="text-field" name="username" onChange={this.onChange} value={username} onfocus="this.value=''"/>
                        <input type="text" placeholder="Email" className="text-field" name="email" onChange={this.onChange} value={email} onfocus="this.value=''" id="password"/>
                        <input type="password" placeholder="Password (at least 8 characters)" className="text-field" name="password" onChange={this.onChange} value={password} onfocus="this.value=''" id="password"/>
                        <input type="password" placeholder="Repeat your password" className="text-field" name="password2" onChange={this.onChange} value={password2} onfocus="this.value=''" id="password"/>
                        <div className="buttons-sign-up">
                            <button id="sign-in" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <label className="policy">Privacy Policy</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
