import React from "react";
import Like from "../../assets/images/like.svg";
import Comment from "../../assets/images/comment.svg";
import image from "./assets/image.png"
import styled from 'styled-components'

const StyledPostCard = styled.article`
    display: grid;
    max-width: 750px;
    grid-template-columns: 1fr 2fr;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    margin: 10px 0;
    cursor: pointer;
`
const StyledPostImage = styled.div`
    max-height: 180px;
    
    img {
        flex: 1;
        object-fit: cover;
        width: 250px;
        height: 180px;
    }
`
const StyledPostContent = styled.div`
    padding: 10px 20px;
`
const StyledPostTitle = styled.h2`
    text-align: left;
    color: #5C4DE8;
    font-size: 18px;
    margin: 0;
`
const StyledPostDescription = styled.p`
    text-align: left;
    color: #000000;
    font-size: 14px;
    height: 85px;
    margin: 10px 0 20px 0;
    overflow: hidden;
`
const StyledPostDetails = styled.div`
    display: flex;
    justify-content: space-between;
    height: 18px;
    color: #000000;
    margin-bottom: 0;
`
const StyledPostAuthor = styled.p`
    flex: 0.8;
    text-align: left;
    font-size: 14px;
    margin: 0;
`
const StyledPostRate = styled.div`
    flex: 0.2;
    display: flex;
    justify-content: space-between;
`
const StyledPostStats = styled.div`
    display: inherit;
    align-items: center;
    justify-content: space-between;
    flex: 0.4;
`

const PostCard = ({ post }) => {
    return (
        <StyledPostCard>
            <StyledPostImage>
                <img src={image} alt="sorry"/>
            </StyledPostImage>
            <StyledPostContent>
                <StyledPostTitle>
                    Poor-quality maintenance of the house and yard
                </StyledPostTitle>
                <StyledPostDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget odio condimentum nunc integer mauris nullam egestas eget cursus.
                    Elit in eget tempor pretium. Quis ornare quam interdum vehicula sed tincidunt a ut tellus.
                    Fermentum dolor praesent ornare vivamus molestie etiam placerat tortor amet.
                </StyledPostDescription>
                <StyledPostDetails>
                    <StyledPostAuthor>Alex Thompson - Feb 20, 2020</StyledPostAuthor>
                    <StyledPostRate>
                        <StyledPostStats>
                            <img src={Comment} alt="comment"/>
                            <span>8</span>
                        </StyledPostStats>
                        <StyledPostStats>
                            <img src={Like} alt="like"/>
                            <span>15</span>
                        </StyledPostStats>
                    </StyledPostRate>
                </StyledPostDetails>
            </StyledPostContent>
        </StyledPostCard>
    )
};


export default PostCard
