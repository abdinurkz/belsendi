import React, { Component } from 'react'
import Like from '../assets/images/like.svg'
import Comment from '../assets/images/comment.svg'
import { withRouter } from 'react-router-dom'


export class Favorites extends Component {
    render() {
        return (
            <div className="post-container">
                <div className="posts">
                    <h2 className="post">FAVORITE MOVIES</h2>
                    <div className="post-cards">
                        <div className="post-card">
                            <div className="post-image">
                                <img src={"Logo"} alt="Does not exist"/>
                            </div>
                            <div className="post-content">
                                <h2 className="post-title">Almaty</h2>
                                <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio condimentum nunc integer mauris nullam egestas eget cursus. Elit in eget tempor pretium. Quis ornare quam interdum vehicula sed tincidunt a ut tellus. Fermentum dolor praesent ornare vivamus molestie etiam placerat</p>
                                <div className="post-detail">
                                    <div className="author-field">
                                        <p className="author">Alex Tompson - Feb 20, 2020</p>
                                    </div>
                                    <div className="rate">
                                        <div className="comment">
                                            <img src={Comment} alt="Does not exist"/>
                                            <span>8</span>
                                        </div>
                                        <div className="like">
                                            <img src={Like} alt="Does not exist"/>
                                            <span>15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-image">
                                <img src={"Logo"} alt="Does not exist"/>
                            </div>
                            <div className="post-content">
                                <h2 className="post-title">Almaty</h2>
                                <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio condimentum nunc integer mauris nullam egestas eget cursus. Elit in eget tempor pretium. Quis ornare quam interdum vehicula sed tincidunt a ut tellus. Fermentum dolor praesent ornare vivamus molestie etiam placerat</p>
                                <div className="post-detail">
                                    <div className="author-field">
                                        <p className="author">Alex Tompson - Feb 20, 2020</p>
                                    </div>
                                    <div className="rate">
                                        <div className="comment">
                                            <img src={Comment} alt="Does not exist"/>
                                            <span>8</span>
                                        </div>
                                        <div className="like">
                                            <img src={Like} alt="Does not exist"/>
                                            <span>15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-image">
                                <img src={"Logo"} alt="Does not exist"/>
                                <div class="bottom-right">Bottom Right</div>
                            </div>
                            <div className="post-content">
                                <h2 className="post-title">Almaty</h2>
                                <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio condimentum nunc integer mauris nullam egestas eget cursus. Elit in eget tempor pretium. Quis ornare quam interdum vehicula sed tincidunt a ut tellus. Fermentum dolor praesent ornare vivamus molestie etiam placerat</p>
                                <div className="post-detail">
                                    <div className="author-field">
                                        <p className="author">Alex Tompson - Feb 20, 2020</p>
                                    </div>
                                    <div className="rate">
                                        <div className="comment">
                                            <img src={Comment} alt="Does not exist"/>
                                            <span>8</span>
                                        </div>
                                        <div className="like">
                                            <img src={Like} alt="Does not exist"/>
                                            <span>15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Favorites)
