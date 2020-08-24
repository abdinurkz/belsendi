import React, { Component } from 'react'
import first from '../../images/1.svg'
import second from '../../images/2.svg'
import third from '../../images/3.svg'
import fourth from '../../images/4.svg'
import fifth from '../../images/5.svg'
import { NavLink, Redirect } from 'react-router-dom';
import '../../styles/auth.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../reducers/auth'

export class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password} = this.state;
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
                        <h3 className="login-text">Login</h3>
                        <input type="text" placeholder="Username"  className="text-field" name="username" onChange={this.onChange} value={username} />
                        <input type="password" placeholder="Password" className="text-field" name="password" onChange={this.onChange} value={password} id="password"/>
                        <div className="check">
                            <input type="checkbox" className="remember"/>
                            <label for="remember">Remember me</label>
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
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
