import React from "react";
import NP from "./NewPost.module.css";

const NewPost = (props) => {

    let onPostMessage = () => {
        props.onPostMessage();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.onPostChange(text);
    };

    return (
        <div className={NP.wrapper}>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <button onClick={onPostMessage} className={NP.but}>
                Add Post
            </button>
        </div>
    )
};

export default NewPost;

// let onPostMessage = () => {
//     props.onPostMessage();
// };
//
// let onPostChange = (event) => {
//     let text = event.target.value;
//     props.onPostChange(text);
// };
//
// return (
//     <div className={NP.wrapper}>
//         <div>
//             <textarea onChange={onPostChange} value={props.newPostText}/>
//         </div>
//         <button onClick={onPostMessage} className={NP.but}>
//             Add Post
//         </button>
//     </div>
// )
// };