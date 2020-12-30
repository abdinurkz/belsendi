import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Like from "../../../assets/images/like.svg";
import logo from "../assets/image 66.png"
import ava from "../assets/ava.svg"
import "./PostDetail.css"



const PostDetail = props => {
    return (
        <div className="page">
            <Header/>
            <div className="post_detail">
                <article className="post_info">
                    <img src={logo} alt="post" className="post_detail_image"/>
                    <h2 className="post_detail_title">
                        Poor-quality maintenance of the house and yard
                    </h2>
                    <p className="post_detail_description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget odio condimentum nunc integer mauris nullam egestas eget cursus.
                        Elit in eget tempor pretium.
                    </p>
                    <div className="post_detail_like">
                        <img src={Like} alt="like"/>
                        <span>15</span>
                    </div>
                    <p className="post_detail_author">Alex Thompson - Feb 20, 2020</p>
                </article>
                <div className="post_comments">
                    <h2 className="post_comment_title">COMMENTS</h2>
                    <div className="post_comment_details">
                        <img src={ava} alt="avatar" className="post_comment_image"/>
                        <div className="post_comment_info">
                            <h4 className="post_comment_title">Alexandra Hansen</h4>
                            <span>today 13:59</span>
                            <p>Hello</p>
                            <div className="post_detail_like">
                                <span className="post_comment_reply">Reply</span>
                                <img src={Like} alt="like"/>
                                <span>15</span>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};


export default PostDetail
