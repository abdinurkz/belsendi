import React from "react";
import Like from "../../../assets/images/like.svg";
import Comment from "../../../assets/images/comment.svg";
import image from "./image.png"
import "./PostCard.css"

const PostCard = ({ post }) => {
    return (
        <article className="post_card">
            <div className="post_image">
                <img src={image} alt="sorry"/>
            </div>
            <div className="post_content">
                <h2 className="post_title">
                    Poor-quality maintenance of the house and yard
                </h2>
                <p className="post_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget odio condimentum nunc integer mauris nullam egestas eget cursus.
                    Elit in eget tempor pretium. Quis ornare quam interdum vehicula sed tincidunt a ut tellus.
                    Fermentum dolor praesent ornare vivamus molestie etiam placerat tortor amet.
                </p>
                <div className="post_details">
                    <p className="post_author">Alex Thompson - Feb 20, 2020</p>
                    <div className="post_rate">
                        <div className="post_comment">
                            <img src={Comment} alt="comment"/>
                            <span>8</span>
                        </div>
                        <div className="post_like">
                            <img src={Like} alt="like"/>
                            <span>15</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
};


export default PostCard
