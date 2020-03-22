import React from "react";
import PI from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={PI.img}>
            <div>
                <img className={PI.img1}
                     src='https://ecooboi.com.ua/files/cache/c3/b2/ae/xecooboi-nochnoj-new-york-panoramnoe-foto-10048.jpg.pagespeed.ic.iK6wmO5szo.webp' alt={'img'}/>
            </div>
            <div>
                <img className={PI.img2}
                     src='https://img4.automoto.ua/overview/Ford-Mustang-2020-3fd-huge-1564.jpg' alt={'img'}/>
            </div>
        </div>
    )
};

export default ProfileInfo;