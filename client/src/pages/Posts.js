import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
