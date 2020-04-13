import React from "react";
import P from "./Portfolio.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./My post/MyPostsContainer";

const Portfolio = (props) => {
    return (
        <div className={P.portfolio}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPostContainer store={props.store}/>
            </div>
        </div>
    )
};

export default Portfolio;