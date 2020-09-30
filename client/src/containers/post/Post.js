import React, { useEffect } from 'react'
import PostCard from "./post-card/PostCard";
import CreatePost from "./post-form/CreatePost";
import PopularPosts from "./post-popular/PopularPosts";
import { getPosts } from "../../store/post/post.action"
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import './Post.css'

const onMount = props => () => {
    props.getPosts();
};

const Post = (props) => {

    const { posts } = props;
    useEffect(onMount(props), []);

    return(
        <div className="posts">
            <div className="post-container">
                <div className="posts">
                    <h2 className="post">POSTS</h2>
                    <CreatePost/>
                    <div className="post_cards">
                        {posts.map(post =>
                            <Link to="post/:id">
                                <PostCard post={post} key={post._id}/>
                            </Link>
                        )}
                    </div>
                </div>
                <PopularPosts/>
            </div>
        </div>
    );


};

const mapStateToProps = state => ({
    posts: state.post.posts
});


export default connect(mapStateToProps, { getPosts })(Post);
