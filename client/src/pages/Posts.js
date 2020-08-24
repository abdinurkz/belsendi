import React from "react";
import Header from "../containers/header/Header";
import Footer from "../containers/footer/Footer";
import Post from "../components/post/Post";


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
