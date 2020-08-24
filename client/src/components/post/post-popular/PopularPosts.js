import React from "react";
import Like from "../../../assets/images/like.svg";
import Comment from "../../../assets/images/comment.svg";
import Section from "../../../containers/section/Section";
import "./PopularPosts.css"

const PopularPosts = () => {
    return (
        <div className="popular">
            <Section title="POPULAR POSTS"/>
            <div className="popular-posts">
                <div className="popular-post">
                    <div className="popular-post-image"/>
                    <div className="popular-post-content">
                        <h2 className="popular-title">Lorem Ipsum</h2>
                        <div className="popular-rate">
                            <div className="likes">
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </div>
                            <div className="comments">
                                <img src={Comment} alt="Does not exist"/>
                                <span>35</span>
                            </div>
                        </div>
                        <div className="popular-post-author">
                            <p>by Alex Thompson</p>
                        </div>
                    </div>
                </div>
                <hr className="between"/>
                <div className="popular-post">
                    <div className="popular-post-image">
                    </div>
                    <div className="popular-post-content">
                        <h2 className="popular-title">Lorem Ipsum</h2>
                        <div className="popular-rate">
                            <div className="likes">
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </div>
                            <div className="comments">
                                <img src={Comment} alt="Does not exist"/>
                                <span>35</span>
                            </div>
                        </div>
                        <div className="popular-post-author">
                            <p>by Alex Thompson</p>
                        </div>
                    </div>
                </div>
                <hr className="between"/>
                <div className="popular-post">
                    <div className="popular-post-image">
                    </div>
                    <div className="popular-post-content">
                        <h2 className="popular-title">Lorem Ipsum</h2>
                        <div className="popular-rate">
                            <div className="likes">
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </div>
                            <div className="comments">
                                <img src={Comment} alt="Does not exist"/>
                                <span>35</span>
                            </div>
                        </div>
                        <div className="popular-post-author">
                            <p>by Alex Thompson</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default PopularPosts
