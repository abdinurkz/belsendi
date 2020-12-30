import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Favorites} from "../containers/Favorites";

const FavoritesPage = () => {
    return (
        <div className="page">
            <Header/>
            <Favorites/>
            <Footer/>
        </div>
    )
};

export default FavoritesPage

