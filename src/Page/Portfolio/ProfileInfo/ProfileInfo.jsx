import React from "react";
import PI from "./ProfileInfo.module.css";
import Preloader from "../../../auxiliary/preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import avaUser from "../../../image/avaUser.png"
import InfoAboutUser from "./InfoAboutUser";

const ProfileInfo = ({profile, isOwner, savePhoto, photos, ...props}) => {
    if (profile === null || profile === undefined) {
        return <Preloader/>
    }

    let onPhotoSelect = (e) => {
        if (e.target.files.length) {
            props.savePhotoUserThunk(e.target.files[0])
        }
    };

    return (
        <div>
            <div>
                {isOwner && <input type={'file'} onChange={onPhotoSelect}/>}
            </div>
            <div>
                <img className={PI.img2}
                     src={profile.photos.large || avaUser} alt={'img'}/>
            </div>
            <div>
                <ProfileStatus
                    status={props.status}
                    updateStatusThunk={props.updateStatusThunk}
                />
            </div>
            <div>
                <InfoAboutUser profile={profile}/>
            </div>
        </div>
    )
};

export default ProfileInfo;