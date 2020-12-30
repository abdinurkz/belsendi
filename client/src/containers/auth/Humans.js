import React from "react";
import first from "../../assets/images/man-stroller.svg";
import second from "../../assets/images/man-red.svg";
import third from "../../assets/images/man-white.svg";
import fourth from "../../assets/images/woman-blue.svg";
import fifth from "../../assets/images/woman-white.svg";
import styled from 'styled-components'


const StyledLeftSide = styled.div`
    background: #627CFF;
    position: relative;
    display: flex;
    height: 100%;
    
    img {
        position: absolute;
    }
    
    .first {
        right: 159px;
        top: 99px;
    }
    .second {
        top: 229px;
        left: 209px;
    }
    .third {
        right: 207px;
        bottom: 130px;
    }
    .fourth {
        right: 49px;
        bottom: 296px;
        z-index: 1;
    }
    .fifth {
        top: 197px;
        left: 70px;
        z-index: 2;
    }
    label {
        position: absolute;
        bottom: 22px;
        right: 30px;
        color: white;
        font-size: 14px;
    }
`


const Humans = () => {
    return (
        <StyledLeftSide>
            <img src={first} className="first" alt="Not Found"/>
            <img src={second} className="second" alt="Not Found"/>
            <img src={third} className="third" alt="Not Found"/>
            <img src={fourth} className="fourth" alt="Not Found"/>
            <img src={fifth} className="fifth" alt="Not Found"/>
            <label>Powered by Develdt Agency</label>
        </StyledLeftSide>
    )
};


export default Humans
