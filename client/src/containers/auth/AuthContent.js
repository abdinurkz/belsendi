import React from "react";
import Humans from "./Humans";
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    min-height: 100vh;
    height: 100%;
`
const StyledRightSide = styled.div`
    background: #4557b3;
    color: white;
    height: 100%;
    position: relative;
    
    .policy {
        position: absolute;
        color: white;
        font-size: 14px;
        bottom: 22px;
        left: 30px;
    }
`
const StyledTitle = styled.h2`
    font-size: 36px;
    text-align: center;
    font-family: Proxima Nova, sans-serif;
    line-height: 58px;
    font-weight: normal;
    margin: 80px 120px 100px;
`

const AuthContent = (props) => {
    return (
        <Container>
            <Humans/>
            <StyledRightSide>
                <StyledTitle>WELCOME, <b>BELSENDI!</b></StyledTitle>
                { props.children }
                <label className="policy">Privacy Policy</label>
            </StyledRightSide>
        </Container>
    )
};

export default AuthContent
