import React from "react";
import SurveyCard from "../survey-card/SurveyCard";
import "./SurveyDetail.css"


const SurveyDetail = props => {
    return (
        <div className="containers">
            <div className="survey-detail">
                <SurveyCard/>
                <div className="survey-question-info">
                    <h2 className="survey-title">Survey</h2>
                    <h3 className="survey-question">Question #1</h3>
                    <p className="survey-question-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id tortor, tellus turpis tellus. Maecenas consequat non dapibus mauris.
                        Fusce vitae, lacus facilisis nec aliquet urna, faucibus.
                        Sit non dapibus at porttitor sit id. Nisl tortor sapien luctus nisl lectus.
                        Tellus mauris nec et tellus duis id et montes, at.
                    </p>
                    <div className="survey-question-variants">
                        <button>
                            <span>Lorem Ipsum</span>
                        </button>
                        <button>
                            <span>Lorem Ipsum</span>
                        </button>
                        <button>
                            <span>Lorem Ipsum</span>
                        </button>
                        <button>
                            <span>Lorem Ipsum</span>
                        </button>

                    </div>
                    <div className="survey-question-actions">
                        <button>Prev</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default SurveyDetail
