import React from "react";
import p from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div>
            <div className={p.posts}>
                <div>
                    <img className={p.ava} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLAefZFkKmmHrqrrdUgjatpQkHupz86NA2eYHrKjrh6K7Z0Xpc'} alt={'ava'}/>
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    <img className={p.like} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwzLqxo4D2FsQg-_p6fb3DFN2LYlxpoeo5WQsjZHAFl8XTFBFA'} alt={'like'}/>
                    {props.like}
                </div>
            </div>
        </div>
    )
};

export default Posts;