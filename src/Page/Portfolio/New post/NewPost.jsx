import React from "react";
import NP from "./NewPost.module.css";
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {

    let onPostChange = (values) => {
        let text = values.newPostText;
        props.onPostChange(text);
    };

    return (
        <div>
            <NewPostReduxForm onSubmit={onPostChange}/>
        </div>
    )
};

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Added post.'}/>
            </div>
            <button className={NP.but}>
                Add Post
            </button>
        </form>
    )
};

const NewPostReduxForm = reduxForm({form: 'post'})(NewPostForm);

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