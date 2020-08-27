import React, {useState} from "react";
import Profile from "../../../assets/images/profile.svg";
import Smile from "../../../assets/images/smile.svg";
import Clip from "../../../assets/images/clip.svg";
import "./CreatePost.css"


const CreatePost = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null
    });

    const onChange = (e) => setFormData({ [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image', formData.image, formData.image.name);
        form_data.append('title', formData.title);
        form_data.append('description', formData.description);
        props.addPost(form_data);
    };

    const handleImageChange = (e) => {
        setFormData({
            image: e.target.files[0]
        });
    };


    return (
        <form className="create-post" onSubmit={onSubmit}>
            <div className="create-post-post">
                <div className="profile">
                    <img src={Profile} className="ellipse" alt="Not Found"/>
                    <input type="text" placeholder="Recommend movie" id="input-post" name="title" onChange={onChange} value={formData.title}/>
                </div>
                <div className="icons">
                    <img src={Smile} id="smile" alt="Not Found"/>
                    <img src={Clip} alt="Not Found"/>
                </div>
            </div>
            <div className="publish">
                <div className="text-area">
                    <input type="text" id="input-post-description" name="description" onChange={onChange} value={formData.description}/>
                </div>
                <div className="button-field">
                    <label>
                        <img src={Clip} id="clip" alt="Not Found"/>
                        <input type="file" id="file" name="image"  accept="image/gif,image/jpeg,image/jpg,image/png" multiple="" data-original-title="upload photos" onChange={handleImageChange}/>
                    </label>
                    <button type="submit" name="submit-post" id="publish">Publish</button>
                </div>
            </div>
        </form>
    )
};


export default CreatePost
