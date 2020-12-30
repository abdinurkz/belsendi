import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
