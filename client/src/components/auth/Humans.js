import React from "react";
import first from "../../assets/images/man-stroller.svg";
import second from "../../assets/images/man-red.svg";
import third from "../../assets/images/man-white.svg";
import fourth from "../../assets/images/woman-blue.svg";
import fifth from "../../assets/images/woman-white.svg";


const Humans = () => {
    return (
        <div className="left-side">
            <img src={first} className="first" alt="Not Found"/>
            <img src={second} className="second" alt="Not Found"/>
            <img src={third} className="third" alt="Not Found"/>
            <img src={fourth} className="fourth" alt="Not Found"/>
            <img src={fifth} className="fifth" alt="Not Found"/>
            <label className="develdt">Powered by Develdt Agency</label>
        </div>
    )
};


export default Humans
