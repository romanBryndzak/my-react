import React from "react";
import U from "./Users.module.css";
import * as axios from "axios";
import avaUsers from "./../../image/avaUsers.jpg"


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                        <div key={u.id} className={U.wrapper}>
                             <span>
                               <div> <img src={u.photos.small != null ? u.photos.small : avaUsers} className={U.ava} alt={'ava'}/> </div>
                                 <div> {u.followed
                                     ?
                                     <button onClick={() => {
                                         this.props.yesFollow(u.id)
                                     }} className={U.but}> Yes follow </button>
                                     :
                                     <button onClick={() => {
                                         this.props.notFollow(u.id)
                                     }} className={U.but}> Not follow </button>}
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
    }
}

export default Users;