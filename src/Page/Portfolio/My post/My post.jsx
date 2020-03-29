import React from "react";
import mp from "./My post.module.css";
import NewPost from "../New post/New post";
import Posts from "../Posts/Posts";

const MyPost = (props) => {
    const PostElement = props.posts.map( p => <Posts id={p.id} message={p.message} like={p.like} key={p.id}/>);
    return (
        <div>
            <div>

            </div>
            <div>
                <NewPost/>
            </div>
            <div className={mp.postElement}>
                {PostElement}
            </div>
        </div>
    )
};

export default MyPost;