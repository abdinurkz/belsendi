import React from "react";
import "./SurveyCard.css"

const SurveyCard = props => {
    return (
        <article className="survey-card">
            <img src="" alt="survey-image"/>
            <div className="survey-content">
                <h3 className="survey-title">Lorem Ipsum</h3>
                <p className="survey-description">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nisi, ipsum ut enim egestas.
                </p>
                <span>102 Respondents</span>
            </div>
        </article>
    )
};


export default SurveyCard
