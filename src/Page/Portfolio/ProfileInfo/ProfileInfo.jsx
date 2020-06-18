import React from "react";
import PI from "./ProfileInfo.module.css";
import Preloader from "../../../auxiliary/preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import avaUser from "../../../image/avaUser1.png"

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
            {/*<div className={PI.info}>*/}
            {/*    <div>"aboutMe":{props.profile.aboutMe}</div>*/}
            {/*    <div className={PI.contacts}>"contacts":*/}
            {/*        <div>"facebook": {props.profile.contacts.facebook}</div>*/}
            {/*        <div>"website": {props.profile.contacts.website}</div>*/}
            {/*        <div>"vk": {props.profile.contacts.vk}</div>*/}
            {/*        <div>"twitter": {props.profile.contacts.twitter}</div>*/}
            {/*        <div>"instagram": {props.profile.contacts.instagram}</div>*/}
            {/*        <div>"youtube": {props.profile.contacts.youtube}</div>*/}
            {/*        <div>"github": {props.profile.contacts.github}</div>*/}
            {/*        <div>"mainLink": {props.profile.contacts.mainLink}</div>*/}
            {/*    </div>*/}
            {/*    <div>"lookingForAJob": {props.profile.lookingForAJob}</div>*/}
            {/*    <div>"lookingForAJobDescription": {props.profile.lookingForAJobDescription}</div>*/}
            {/*    <div>"fullName": {props.profile.fullName}</div>*/}
            {/*</div>*/}
        </div>
    )
};

export default ProfileInfo;