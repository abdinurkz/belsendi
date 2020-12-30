import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Survey from "../containers/survey/Survey";


const SurveysPage = () => {
    return (
        <div className="page">
            <Header/>
            <Survey/>
            <Footer/>
        </div>
    )
};


export default SurveysPage
