import React from "react";
import np from "./New post.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let postMessage = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewText(text);
    };

    return (
        <div className={np.wrapper}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={postMessage}>
                        Add Post
                    </button>
                </div>
            </div>
        </div>
    )
};

export default NewPost;