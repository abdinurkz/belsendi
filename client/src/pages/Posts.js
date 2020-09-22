import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Post from "../containers/post/Post";


const PostsPage = () => {
    return (
        <div className="page">
            <Header/>
            <Post/>
            <Footer/>
        </div>
    )
};


export default PostsPage
