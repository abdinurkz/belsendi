import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { register } from '../../../store/auth/auth.action'
import AuthContent from "../right-side/AuthContent";
import "../auth.css"

const Register = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        const { name, email, phone, password, password2 } = state;
        if (password !== password2){
            console.log("password don't match");
        } else {
            const newUser = {
                name,
                password,
                email,
                phone,
            };
            console.log(newUser)
            props.register(newUser);
        }
    };

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    if(props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    const { name, email, password, phone, password2 } = state;

    return (
        <AuthContent>
            <form className="login-fields" onSubmit={onSubmit}>
                <h3 className="login-text">Registration</h3>
                <input type="text" placeholder="Username" className="text-field" name="name" onChange={onChange}
                       value={name} />
                <input type="text" placeholder="Phone" className="text-field" name="phone" onChange={onChange}
                       value={phone} />
                <input type="text" placeholder="Email" className="text-field" name="email" onChange={onChange}
                       value={email} />
                <input type="password" placeholder="Password (at least 8 characters)" className="text-field"
                       name="password" onChange={onChange} value={password} />
                <input type="password" placeholder="Repeat your password" className="text-field" name="password2"
                       onChange={onChange} value={password2}/>
                <div className="buttons-sign-up">
                    <button id="sign-in" type="submit">Sign Up</button>
                </div>
            </form>
        </AuthContent>
    )
};

export default connect(null, { register })(Register);
