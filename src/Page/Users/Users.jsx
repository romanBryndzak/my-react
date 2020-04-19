import React from "react";
import U from "./Users.module.css";

const Users = (props) => {

    return (
        <div>
            {props.users.map(u => <div key={u.id} className={U.wrapper}>
                 <span>
                   <div> <img src={u.avaUsers} className={U.ava} alt={'ava'}/> </div>
                     <div> {u.followed
                         ?
                         <button onClick={() => {
                             props.follow(u.id)
                         }} className={U.but}> Follow </button>
                         :
                         <button onClick={() => {
                             props.notFollow(u.id)
                         }} className={U.but}> Not follow </button>}
                     </div>
                 </span>
                <span className={U.wrapper}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.userCity}</div>
                        <div>{u.userCountry}</div>
                    </span>
                </span>

            </div>)}
        </div>
    )
};

export default Users;