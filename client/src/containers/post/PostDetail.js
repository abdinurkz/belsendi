import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Like from "../../assets/images/like.svg";
import logo from "./assets/image 66.png"
import ava from "./assets/ava.svg"
import styled from 'styled-components'


const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f4f4f4;
`
const StyledPostDetail = styled.div`
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;
`
const PostInfo = styled.article`
    flex: 0.3;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 540px;
`
const PostTitle = styled.h2`
    margin: 20px 0 10px;
`
const PostCommentDetail = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
`
const PostLike = styled.div`
    display: flex;
    align-items: center;
    max-width: 45px;
    justify-content: space-between;
    
    .post_comment_reply {
        margin-right: 20px;
    }
`
const PostComments = styled.div`
    flex: 0.65;
    overflow: scroll;
    
    h2 {
        margin: 0;
    }
    
    .post_comment_image {
        flex: 0.1;
    }
    
    .post_comment_info {
        flex: 0.9;
    }
`

const PostDetail = props => {
    return (
        <Page>
            <Header/>
            <StyledPostDetail>
                <PostInfo>
                    <img src={logo} alt="post" className="post_detail_image"/>
                    <PostTitle>
                        Poor-quality maintenance of the house and yard
                    </PostTitle>
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
                </PostInfo>
                <PostComments>
                    <h2 className="post_comment_title">COMMENTS</h2>
                    <PostCommentDetail>
                        <img src={ava} alt="avatar" className="post_comment_image"/>
                        <div className="post_comment_info">
                            <h4 className="post_comment_title">Alexandra Hansen</h4>
                            <span>today 13:59</span>
                            <p>Hello</p>
                            <PostLike>
                                <span className="post_comment_reply">Reply</span>
                                <img src={Like} alt="like"/>
                                <span>15</span>
                            </PostLike>
                            <hr/>
                        </div>
                    </PostCommentDetail>
                </PostComments>
            </StyledPostDetail>
            <Footer/>
        </Page>
    )
};


export default PostDetail
