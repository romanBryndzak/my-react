import React from "react";
import PI from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={PI.img}>
            <div>
                <img className={PI.img1}
                     src='https://vet-panda.dp.ua/wp-content/uploads/2017/09/photo_sov_02.jpg'/>
            </div>
            <div>
                <img className={PI.img2}
                     src='https://img4.automoto.ua/overview/Ford-Mustang-2020-3fd-huge-1564.jpg'/>
            </div>
        </div>
    )
};

export default ProfileInfo;