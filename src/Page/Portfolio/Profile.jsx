import React from "react";
import ProfileInfo from "./Profile/ProfileInfo";
import MyPostContainer from "./My post/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
            <div>
                <MyPostContainer/>
            </div>
        </div>
    )
};

export default Profile;