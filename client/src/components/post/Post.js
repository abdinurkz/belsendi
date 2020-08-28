import React, { useEffect } from 'react'
import { getPosts } from "../../store/post/post.action"
import PostCard from "./post-card/PostCard";
import CreatePost from "./post-form/CreatePost";
import PopularPosts from "./post-popular/PopularPosts";
import { connect } from 'react-redux'
import './Post.css'

const onMount = props => () => {
    props.getPosts();
};

const Post = (props) => {

    useEffect(onMount(props), []);

    console.log(props.posts);

    return(
        <div className="nav">
            <div className="post-container">
                <div className="posts">
                    <h2 className="post">POSTS</h2>
                    <CreatePost/>
                    <div className="post-cards">
                        {/*{props.post.map(post => <PostCard post={post} key={post.id}/>)}*/}
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
