import React, { Fragment, useEffect } from 'react'
import { getPost, addPost } from '../../store/actions/post.action';
import PostCard from "./post-card/PostCard";
import CreatePost from "./post-form/CreatePost";
import PopularPosts from "./post-popular/PopularPosts";
import { connect } from 'react-redux'
import './Post.css'

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
                <PopularPosts/>
            </div>
        </Fragment>
    );


};

const mapStateToProps = state => ({
    post: state.post.post
});


export default connect(mapStateToProps, { getPost, addPost })(Post);
