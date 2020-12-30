import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
