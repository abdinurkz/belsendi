import React, { Component, Fragment } from 'react'
import '../../styles/post.css'
import Clip from '../../images/clip.svg'
import Smile from '../../images/smile.svg'
import Profile from '../../images/profile.svg'
import Like from '../../images/like.svg'
import Comment from '../../images/comment.svg'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPost, addPost } from '../../reducers/post'

export class Post extends Component{

    state = {
        title: '',
        description: '',
        image: null
    };

    static propTypes = {
        post: PropTypes.array.isRequired,
        addPost: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getPost();
    }

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    onSubmit = e => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        this.props.addPost(form_data);
    };


    render(){
        const { title, description} = this.state;
        return(
            <Fragment>
                <div className="post-container">
                    <div className="posts">
                        <h2 className="post">MOVIES</h2>
                        <form className="create-post" onSubmit={this.onSubmit}>
                            <div className="create-post-post">
                                <div className="profile">
                                    <img src={Profile} className="ellipse" alt="Not Found"/>
                                    <input type="text" placeholder="Recommend movie" id="input-post" name="title" onChange={this.onChange} value={title}/>
                                </div>
                                <div className="icons">
                                    <img src={Smile} id="smile" alt="Not Found"/>
                                    <img src={Clip} alt="Not Found"/>
                                </div>
                            </div>
                            <div className="publish">
                                <div className="text-area">
                                    <input type="text" id="input-post-description" name="description" onChange={this.onChange} value={description}></input>
                                </div>
                                <div className="button-field">
                                    <label>
                                        <img src={Clip} id="clip" alt="Not Found"/>
                                        <input type="file" id="file" name="image"  accept="image/gif,image/jpeg,image/jpg,image/png" multiple="" data-original-title="upload photos" onChange={this.handleImageChange}/>
                                    </label>
                                    <button type="submit" name="submit-post" id="publish">Publish</button>
                                </div>
                            </div>
                        </form>


                        <div className="post-cards">
                            {this.props.post.map(post => (
                                <div className="post-card" key={post.id}>
                                    <div className="post-image">
                                        <img src={post.image}></img>
                                    </div>
                                    <div className="post-content">
                                        <h2 className="post-title">{post.title}</h2>
                                        <p className="post-description">{post.description}</p>
                                        <div className="post-detail">
                                            <div className="rate">
                                                <div className="like">
                                                    <img src={Like} alt="Does not exist"/>
                                                    <span>15</span>
                                                </div>
                                                <div className="comment">
                                                    <img src={Comment} alt="Does not exist"/>
                                                    <span>8</span>
                                                </div>
                                            </div>
                                            <div className="author-field">
                                                <p className="author">{post.owner} - {post.created_at}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

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
    }
}

const mapStateToProps = state => ({
    post: state.post.post
});


export default connect(mapStateToProps, { getPost, addPost })(Post);
