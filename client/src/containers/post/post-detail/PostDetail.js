import React from "react";


const PostDetail = props => {
    return (
        <div>
            <div>
                <article className="post_info">
                    <img src="" alt="" className="post_detail_image"/>
                    <h2 className="post_detail_title">
                        Poor-quality maintenance of the house and yard
                    </h2>
                    <p className="post_detail_description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget odio condimentum nunc integer mauris nullam egestas eget cursus.
                        Elit in eget tempor pretium.
                    </p>
                </article>
                <div className="post_comments">
                    <h2 className="post">COMMENTS</h2>
                </div>
            </div>
        </div>
    )
};


export default PostDetail
