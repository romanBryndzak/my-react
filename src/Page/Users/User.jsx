import React from "react";
import U from "./Users.module.css";
import avaUsers from "./../../image/avaUser.png"
import {NavLink} from "react-router-dom";
import auxiliary from "../../auxiliary/auxiliary.module.css";


const User = (props) => {

    return (
        <div>
            {props.users.map(u =>
                <div className={U.wrapper} key={u.id}>
                             <span>
                               <NavLink to={'/profile/' + u.id}>
                                   <img src={u.photos.small != null ? u.photos.small : avaUsers}
                                        className={U.ava}
                                        alt={'ava'}/>
                               </NavLink>
                                 <div className={U.BUT}> {u.followed
                                     ?
                                     <button disabled={props.followedStatus.some(id => id === u.id)}
                                             onClick={() => {
                                                 props.notFollowButtonStatusThunk(u.id)
                                             }} className={auxiliary.but}> Not follow </button>
                                     :
                                     <button disabled={props.followedStatus.some(id => id === u.id)}
                                             onClick={() => {
                                                 props.followButtonStatusThunk(u.id)
                                             }} className={auxiliary.but}> Yes follow </button>}
                                 </div>
                             </span>
                    <span className={U.wrapper}>
                                <span className={U.wrapperName}>
                                    <div className={U.name}>{u.name}</div>
                                    <div>{'u.status'}</div>
                                </span>
                                <span>
                                    <div className={U.city}>{'u.userCity'}</div>
                                    <div>{'u.userCountry'}</div>
                                </span>
                            </span>
                </div>
            )}
        </div>
    )
};

export default User;