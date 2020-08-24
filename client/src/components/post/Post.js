import React, { Fragment, useEffect } from 'react'
import Like from '../../assets/images/like.svg'
import Comment from '../../assets/images/comment.svg'
import { getPost, addPost } from '../../store/actions/post.action';
import { connect } from 'react-redux'
import './Post.css'
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

const onMount = props => () => {
    props.getPost();
};

const Post = (props) => {

    useEffect(onMount(props), []);

    return(
        <Fragment>
            <div className="post-container">
                <div className="posts">
                    <h2 className="post">MOVIES</h2>
                    <CreatePost/>
                    <div className="post-cards">
                        {props.post.map(post => <PostCard post={post} key={post.id}/>)}
                    </div>
                </div>
                <div className="popular">
                    <h2 className="post">POPULAR MOVIES</h2>
                    <div className="popular-posts">
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
            </div>
        </Fragment>
    );


};

const mapStateToProps = state => ({
    post: state.post.post
});


export default connect(mapStateToProps, { getPost, addPost })(Post);
