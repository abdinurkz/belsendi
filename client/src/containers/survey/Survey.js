import React from "react";
import SurveyCard from "./SurveyCard";
import styled from 'styled-components'
import {Link} from "react-router-dom";

const StyledSurveys = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    margin-bottom: 80px;
`
const SurveyContainer = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`

const Survey = props => {
    return (
        <SurveyContainer>
            <h2 className="post">Surveys</h2>
            <StyledSurveys>
                <Link to="survey/:id" className="survey-link">
                    <SurveyCard/>
                </Link>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
            </StyledSurveys>
            <h2 className="post">Petitions</h2>
            <StyledSurveys>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
            </StyledSurveys>
        </SurveyContainer>
    )
};


export default Survey
