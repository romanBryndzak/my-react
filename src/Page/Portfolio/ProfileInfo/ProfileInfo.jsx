import React from "react";
import PI from "./ProfileInfo.module.css";
import Preloader from "../../../components/common/preloader";

const ProfileInfo = (props) => {
    if (props.profile === null || props.profile === undefined) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={PI.img1}
                     src='https://ecooboi.com.ua/files/cache/c3/b2/ae/xecooboi-nochnoj-new-york-panoramnoe-foto-10048.jpg.pagespeed.ic.iK6wmO5szo.webp'
                     alt={'img'}/>
            </div>
            <div>
                <img className={PI.img2}
                     src={props.profile.photos.large} alt={'img'}/>
                {/*<img className={PI.img2}*/}
                {/*src='https://img4.automoto.ua/overview/Ford-Mustang-2020-3fd-huge-1564.jpg' alt={'img'}/>*/}
            </div>
            <div className={PI.info}>
                <div>"aboutMe":{props.profile.aboutMe}</div>
                <div className={PI.contacts}>"contacts":
                    <div>"facebook": {props.profile.contacts.facebook}</div>
                    <div>"website": {props.profile.contacts.website}</div>
                    <div>"vk": {props.profile.contacts.vk}</div>
                    <div>"twitter": {props.profile.contacts.twitter}</div>
                    <div>"instagram": {props.profile.contacts.instagram}</div>
                    <div>"youtube": {props.profile.contacts.youtube}</div>
                    <div>"github": {props.profile.contacts.github}</div>
                    <div>"mainLink": {props.profile.contacts.mainLink}</div>
                </div>
                <div>"lookingForAJob": {props.profile.lookingForAJob}</div>
                <div>"lookingForAJobDescription": {props.profile.lookingForAJobDescription}</div>
                <div>"fullName": {props.profile.fullName}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;