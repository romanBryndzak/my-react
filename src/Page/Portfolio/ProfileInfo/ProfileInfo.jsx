import React from "react";
import PI from "./ProfileInfo.module.css";
import Preloader from "../../../auxiliary/preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import avaUser from "../../../image/avaUser.png"

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

            <div className={PI.info}>
                <div>
                    <b>Full name</b>: {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                { profile.lookingForAIob && <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>About me</b>:{profile.aboutMe}
                </div>
                <div className={PI.contacts}><b>Contacts</b>:
                    <div>
                        <b>github</b>: {profile.contacts.github}
                    </div>
                    <div>
                        <b>facebook</b>: {profile.contacts.facebook}
                    </div>
                    <div>
                        <b>website</b>: {profile.contacts.website}
                    </div>
                    <div>
                        <b>vk</b>: {profile.contacts.vk}
                    </div>
                    <div>
                        <b>twitter</b>: {profile.contacts.twitter}
                    </div>
                    <div>
                        <b>instagram</b>: {profile.contacts.instagram}
                    </div>
                    <div>
                        <b>youtube</b>: {profile.contacts.youtube}
                    </div>
                    <div>
                        <b>mainLink</b>: {profile.contacts.mainLink}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
//
// Type: object
// Properties
// userId: required(integer)
// lookingForAJob: required(boolean)
// lookingForAJobDescription: required(string)
// fullName: required(string)
// contacts: required(object)
// github: required(string)
// vk: required(string)
// facebook: required(string)
// instagram: required(string)
// twitter: required(string)
// website: required(string)
// youtube: required(string)
// mainLink: required(string)