import React from "react";
import P from "./Portfolio.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./My post/My post";

const Portfolio = (props) => {
    return (
        <div className={P.portfolio}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPost posts={props.posts}/>
            </div>
        </div>
    )
};

export default Portfolio;