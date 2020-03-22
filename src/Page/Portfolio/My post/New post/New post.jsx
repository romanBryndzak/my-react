import React from "react";
import NP from "./New post.module.css";

const NewPost = () => {
    return (
        <div>
            <div>
                <textarea>

                </textarea>
                <div>
                    <button className={NP.btn}>
                        Add Post
                    </button>
                </div>
            </div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
        </div>
    )
};

export default NewPost;