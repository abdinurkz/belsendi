import React from "react";
import "./Survey.css"
import SurveyCard from "./survey-card/SurveyCard";

const Survey = props => {
    return (
        <div className="containers">
            <h2>Surveys</h2>
            <div className="surveys">
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
            </div>
        </div>
    )
};


export default Survey
