import React, {useState} from "react";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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

    const [expand, setExpand] = useState(false);


    return (
        <form className="postForm" onSubmit={onSubmit}>
            <div className="postForm_initial">
                <div className="postForm__title">
                    <AccountCircleIcon/>
                    <input
                        type="text"
                        placeholder="Create your post"
                        className="postTitle"
                        onClick={() => setExpand(!expand)}
                        onChange={onChange}
                    />
                </div>
                <div className="postForm__icons">
                    <EmojiEmotionsIcon/>
                    <AttachFileIcon/>
                </div>
            </div>
            <div className={expand ? "postForm_expand" : 'none'}>
                <textarea type="text" className="postDescription" name={formData.description}/>
                <div className="postForm__upload">
                    <AttachFileIcon onClick={handleImageChange}/>
                    <button className="postSubmit" type="submit">Publish</button>
                </div>
            </div>
        </form>
    )
};


export default CreatePost
