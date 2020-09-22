import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Digest from "../containers/digest/Digest";


const DigestsPage = () => {
    return (
        <div className="page">
            <Header/>
            <Digest/>
            <Footer/>
        </div>
    )
};


export default DigestsPage
