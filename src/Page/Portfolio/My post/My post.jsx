import React from "react";
import mp from "./MyPost.module.css";
import NewPost from "../New post/NewPost";
import Posts from "../Posts/Posts";

const MyPost = (props) => {
    const PostElement = props.posts.map(p =>
        <Posts id={p.id}
               message={p.message}
               like={p.like}
               key={p.id}
        />);

    return (
        <div>
            <NewPost onPostMessage={props.onPostMessage}
                     onPostChange={props.onPostChange}
                     newPostText={props.newPostText}
            />
            <div className={mp.postElement}>
                {PostElement}
            </div>
        </div>
    )
};

export default MyPost;