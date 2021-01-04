import React from "react";
import Like from "../../assets/images/like.svg";
import Section from "../../components/Section";
import styled from 'styled-components'

const StyledPopularPosts = styled.div`
    width: 360px;
    border: 1px solid #ccc;
    color: black;
    background-color: #fff;
    border-radius: 2px;
`
const PopularPost = styled.div`
    display: flex;
    padding: 15px;
`
const PopularPostContent = styled.div`
    width: 100%;
    display: block;
    text-align: left;
`
const PopularPostTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    color: #627CFF;
`
const PopularPostRate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin: 0;
    
    p {
        flex: 0.8;
    }
    
    img {
        vertical-align: middle;
    }
`
const PopularPostLikes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 0.2;
`
const Between = styled.hr`
    margin: 0;
    border: 1px solid #CCCCCC;
`

const PostPopular = () => {
    return (
        <div>
            <Section title="POPULAR POSTS"/>
            <StyledPopularPosts>
                <PopularPost>
                    <PopularPostContent>
                        <PopularPostTitle>Lorem Ipsum</PopularPostTitle>
                        <PopularPostRate>
                            <p>Alex Thompson - Feb 20, 2020</p>
                            <PopularPostLikes>
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </PopularPostLikes>
                        </PopularPostRate>
                    </PopularPostContent>
                </PopularPost>
                <Between />
                <PopularPost>
                    <PopularPostContent>
                        <PopularPostTitle>Lorem Ipsum</PopularPostTitle>
                        <PopularPostRate>
                            <p>Alex Thompson - Feb 20, 2020</p>
                            <PopularPostLikes>
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </PopularPostLikes>
                        </PopularPostRate>
                    </PopularPostContent>
                </PopularPost>
            </StyledPopularPosts>
        </div>
    )
};


export default PostPopular
