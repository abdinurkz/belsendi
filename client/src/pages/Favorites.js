import React from "react";
import Header from "../containers/header/Header";
import Footer from "../containers/footer/Footer";
import {Favorites} from "../components/favorites/Favorites";

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

