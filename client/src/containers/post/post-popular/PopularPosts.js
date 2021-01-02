import React from "react";
import Like from "../../../assets/images/like.svg";
import Section from "../../../components/Section";
import styled from 'styled-components'
import "./PopularPosts.css"

const StyledPopularPosts = styled.div`
    width: 360px;
    border: 1px solid #ccc;
    color: black;
    background-color: #fff;
`

const PopularPosts = () => {
    return (
        <div>
            <Section title="POPULAR POSTS"/>
            <StyledPopularPosts>
                <div className="popular-post">
                    <div className="popular-post-content">
                        <h2 className="popular-title">Lorem Ipsum</h2>
                        <div className="popular-rate">
                            <p>Alex Thompson - Feb 20, 2020</p>
                            <div className="likes">
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="between"/>
                <div className="popular-post">
                    <div className="popular-post-content">
                        <h2 className="popular-title">Lorem Ipsum</h2>
                        <div className="popular-rate">
                            <p>Alex Thompson - Feb 20, 2020</p>
                            <div className="likes">
                                <img src={Like} alt="Does not exist"/>
                                <span>152</span>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledPopularPosts>
        </div>
    )
};


export default PopularPosts
