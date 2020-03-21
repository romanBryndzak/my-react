import React from "react";
import P from "./Portfolio.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./ProfileInfo/My post/My post";

const Portfolio = () => {
    return (
        <div className={P.portfolio}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPost/>
            </div>
            <div>New post</div>
            <div>post1</div>
            <div>post2</div>
            <div>post3</div>
        </div>
    )
};

export default Portfolio;