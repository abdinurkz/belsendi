import React from "react";
import icon from "./assets/icon.svg"
import styled from 'styled-components'


const StyledSurveyCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
    height: 340px;
    cursor: pointer;
    
    img {
         object-fit: cover;
    }
`
const StyledSurveyContent = styled.div`
    padding: 10px 20px;
    background-color: #ffffff;
    
    h3 {
        margin: 0;
    }
    
    .survey-description {
        margin: 10px 0;
    }
`

const SurveyCard = props => {
    return (
        <StyledSurveyCard>
            <img src={icon} alt="survey" className="survey-image"/>
            <StyledSurveyContent>
                <h3 className="survey-title">Lorem Ipsum</h3>
                <p className="survey-description">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nisi, ipsum ut enim egestas.
                </p>
                <span className="survey-respondents">102 Respondents</span>
            </StyledSurveyContent>
        </StyledSurveyCard>
    )
};


export default SurveyCard
