import React from "react";
import P from "./Portfolio.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./My post/MyPostsContainer";

const Portfolio = () => {
    return (
        <div className={P.portfolio}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPostContainer/>
            </div>
        </div>
    )
};

export default Portfolio;