import React from "react";
import MyPost from "./My post";
import NewPost from "../New post/NewPost";
import {addPostAction, updateNewTextAction} from "../../../BLL/portfolioReducer";

const MyPostContainer = (props) => {
    let state = props.store.getState();

    let postMessage = () => {
        props.store.dispatch(addPostAction());
    };

    let postChange = (text) => {
        props.store.dispatch(updateNewTextAction(text));
    };

    return (
        <div>
            <NewPost onPostMessage={postMessage}
                     onPostChange={postChange}
                     newPostText={state.portfolio.newPostText}
            />
            <MyPost posts={state.portfolio.posts}/>
        </div>
    )
};

export default MyPostContainer;
