import React from "react";
import Like from "../../../assets/images/like.svg";
import Comment from "../../../assets/images/comment.svg";
import "./PostCard.css"

const PostCard = ({ post }) => {
    return (
        <article className="post-card">
            <div className="post-image">
                <img src={`${post.image}`} alt="sorry"/>
            </div>
            <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
                <div className="post-detail">
                    <div className="rate">
                        <div className="like">
                            <img src={Like} alt="Does not exist"/>
                            <span>15</span>
                        </div>
                        <div className="comment">
                            <img src={Comment} alt="Does not exist"/>
                            <span>8</span>
                        </div>
                    </div>
                    <div className="author-field">
                        <p className="author">{post.user.name} - {post.date}</p>
                    </div>
                </div>
            </div>
        </article>
    )
};


export default PostCard
