import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
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
