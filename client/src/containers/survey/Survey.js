import React from "react";
import "./Survey.css"
import SurveyCard from "./survey-card/SurveyCard";
import {Link} from "react-router-dom";

const Survey = props => {
    return (
        <div className="containers">
            <h2 className="post">Surveys</h2>
            <div className="surveys">
                <Link to="survey/:id" className="survey-link">
                    <SurveyCard/>
                </Link>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
            </div>
            <h2 className="post">Petitions</h2>
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
