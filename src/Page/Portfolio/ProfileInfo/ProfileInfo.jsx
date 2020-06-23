import React, {useState} from "react";
import PI from "./ProfileInfo.module.css";
import Preloader from "../../../auxiliary/preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import avaUser from "../../../image/avaUser.png"
import InfoAboutUser from "./InfoAboutUser";
import InfoAboutUserFrom from "./InfoAboutUserForm";

const ProfileInfo = ({profile, isOwner, savePhoto, photos, ...props}) => {
    const setState = useState(false);
    let editMode = setState[0];
    const setEditMode = setState[1];

    const activatedEditMode = () => {
        setEditMode(editMode = true)
    };

    const deactivatedEditMode = () => {
        setEditMode(editMode = false)
    };

    if (profile === null || profile === undefined) {
        return <Preloader/>
    }

    const onPhotoSelect = (e) => {
        if (e.target.files.length) {
            props.savePhotoUserThunk(e.target.files[0])
        }
    };
    const onSubmit = (formData) => {
        props.saveInfoAboutUserThunk(formData);
        deactivatedEditMode();
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
            <div className={PI.wrapperInfoUser}>
                {editMode
                    ? <InfoAboutUserFrom initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <InfoAboutUser profile={profile} editMode={editMode} activatedEditMode={activatedEditMode}/>}
            </div>
        </div>
    )
};

export default ProfileInfo;