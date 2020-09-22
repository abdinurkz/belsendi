import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Petition from "../containers/petition/Petition";


const PetitionsPage = () => {
    return (
        <div className="page">
            <Header/>
            <Petition/>
            <Footer/>
        </div>
    )
};


export default PetitionsPage
