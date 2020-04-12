import React from "react";
import NP from "./NewPost.module.css";
import {addPostAction, updateNewTextAction} from "../../../BLL/portfolioReducer";



const NewPost = (props) => {

    let newPostElement = React.createRef();

    let postMessage = () => {
        props.dispatch(addPostAction());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewTextAction(text));
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