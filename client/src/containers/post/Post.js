import React, { useEffect } from 'react'
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import PostPopular from "./PostPopular";
import { getPosts } from "../../store/post/post.action"
import Section from "../../components/Section";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import styled from 'styled-components'

const onMount = props => () => {
    props.getPosts();
};

const PostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1140px;
    margin: 0 auto;
    
    > div {
        background-color: transparent;
        color: white;
        border-radius: 0.5em;
        text-align: center;
    }
`

const Post = (props) => {

    const { posts } = props;
    useEffect(onMount(props), []);

    return(
        <div className="posts">
            <PostContainer>
                <div className="posts">
                    <Section title="POSTS"/>
                    <PostForm/>
                    <div className="post_cards">
                        {posts.map((post, i) =>
                            <Link to="post/:id" key={i}>
                                <PostCard post={post} key={post._id}/>
                            </Link>
                        )}
                    </div>
                </div>
                <PostPopular/>
            </PostContainer>
        </div>
    );


};

const mapStateToProps = state => ({
    posts: state.post.posts
});


export default connect(mapStateToProps, { getPosts })(Post);
