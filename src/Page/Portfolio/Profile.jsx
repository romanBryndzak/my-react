import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./My post/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo
                    isOwner={props.isOwner}
                    profile={props.profile}
                    photos={props.photos}
                    savePhotoUserThunk={props.savePhotoUserThunk}
                    status={props.status}
                    updateStatusThunk={props.updateStatusThunk}
                    saveInfoAboutUserThunk={props.saveInfoAboutUserThunk}
                />
            </div>
            <div>
                <MyPostContainer/>
            </div>
        </div>
    )
};

export default Profile;