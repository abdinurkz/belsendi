import React, {useState} from "react";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components'


const StyledPostForm = styled.form`
    display: flex;
    flex-direction: column;
    background: #627CFF;
    padding: 10px 20px;
    min-width: 750px;
    min-height: 60px;
    width: 100%;
    border-radius: 2px;
    transition: max-height 3s ease-in;
`
const PostFormIcons = styled.div`
    display: flex;
    justify-content: space-between;
`
const PostFormActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    input {
      visibility:hidden;
      width:0;
      height:0
    }
`
const PostFormButton = styled.button`
    background: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 9px 41px;
    cursor: pointer;
    border-radius: 2px;
`
const PostFormTitle = styled.div`
    display: flex;
    align-items: center;
    
    .postTitle {
        margin-left: 10px;
        padding: 0;
        color: #fff;
        background: none;
        max-width: 350px;
        border: none;
    }
`
const PostFormInitial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 40px;
    align-items: center;
    flex: 0.1;
`
const PostFromDescription = styled.textarea`
    color: #fff;
    font-size: 16px;
    font-family: "Proxima Nova", sans-serif;
    padding: 0;
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    max-height: 200px;
    min-height: 80px;
    max-width: 710px;
    min-width: 710px;
    padding: 10px;
`
const PostFormExpand = styled.div`
    display: flex;
    flex-direction: column;
`

const PostForm = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null
    });

    const onChangeTitle = (e) => {
        setFormData({
            ...formData,
            title: e.target.value
        })
    };
    const onChangeDescription = (e) => {
        setFormData({
            ...formData,
            description: e.target.value
        })
    };
    const onChangeImage = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0].name
        })
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
    };

    const [expand, setExpand] = useState(false);


    return (
        <StyledPostForm onSubmit={onSubmit}>
            <PostFormInitial>
                <PostFormTitle>
                    <AccountCircleIcon/>
                    <input
                        type="text"
                        placeholder="Create your post"
                        className="postTitle"
                        onFocus={(e) => e.target.placeholder = ''}
                        onClick={() => setExpand(!expand)}
                        onChange={onChangeTitle}
                    />
                </PostFormTitle>
                <PostFormIcons>
                    <EmojiEmotionsIcon/>
                </PostFormIcons>
            </PostFormInitial>
            { expand ? (
                <PostFormExpand>
                    <PostFromDescription onChange={onChangeDescription}/>
                    <PostFormActions>
                        <PostFormActions>
                            <label htmlFor="file-input" >
                                <AttachFileIcon />
                            </label>
                            <input id="file-input" type="file" onChange={onChangeImage}/>
                            <span style={{ fontWeight: 'bold' }}>{ formData.image }</span>
                        </PostFormActions>
                        <PostFormButton type="submit">Publish</PostFormButton>
                    </PostFormActions>
                </PostFormExpand>
            ) : null }
        </StyledPostForm>
    )
};


export default PostForm
