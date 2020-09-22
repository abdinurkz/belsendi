import React from "react";
import Humans from "../left-side/Humans";

const AuthContent = (props) => {
    return (
        <div className="container">
            <Humans/>
            <div className="right-side">
                <h2 className="title">WELCOME, <b>BELSENDI!</b></h2>
                { props.children }
                <label className="policy">Privacy Policy</label>
            </div>
        </div>
    )
};

export default AuthContent
