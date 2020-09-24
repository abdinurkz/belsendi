import React from "react";
import icon from "../icon.svg"
import "./SurveyCard.css"

const SurveyCard = props => {
    return (
        <article className="survey-card">
            <img src={icon} alt="survey" className="survey-image"/>
            <div className="survey-content">
                <h3 className="survey-title">Lorem Ipsum</h3>
                <p className="survey-description">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nisi, ipsum ut enim egestas.
                </p>
                <span className="survey-respondents">102 Respondents</span>
            </div>
        </article>
    )
};


export default SurveyCard
