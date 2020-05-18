import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./My post/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} status={props.status}
                             updateStatusThunk={props.updateStatusThunk}/>
            </div>
            <div>
                <MyPostContainer/>
            </div>
        </div>
    )
};

export default Profile;