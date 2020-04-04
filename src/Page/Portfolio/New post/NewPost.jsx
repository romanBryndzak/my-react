import React from "react";
import NP from "./NewPost.module.css";

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
        <div className={NP.wrapper}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={postMessage} className={NP.but}>
                Add Post
            </button>
        </div>
    )
};

export default NewPost;