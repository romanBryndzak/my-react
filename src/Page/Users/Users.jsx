import React from "react";
import U from "./Users.module.css";
import avaUsers from "./../../image/avaUsers.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={U.numberPage}> {pages.map(p => {
                return (
                    <span className={props.currentPage === p && U.selectPage}
                          onClick={() => {
                              props.onChangedPageNumber(p)
                          }}
                    >{p + ', '}</span>
                )
            })}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={U.wrapper}>
                             <span>
                               <NavLink to={'/portfolio/' + u.id}>
                                   <img src={u.photos.small != null ? u.photos.small : avaUsers}
                                        className={U.ava}
                                        alt={'ava'}/>
                               </NavLink>
                                 <div> {u.followed
                                     ?
                                     <button onClick={() => {
                                         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                             withCredentials: true,
                                             headers: {'API-KEY': '262e4bdb-8804-42d5-a5cf-1d2d97476fab'}
                                         }).then(response => {
                                             if (response.data.resultCode === 0) {
                                                 props.notFollow(u.id)
                                             }
                                         })
                                     }} className={U.but}> Not follow </button>
                                     :
                                     <button onClick={() => {
                                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                             withCredentials: true,
                                             headers: {'API-KEY': '262e4bdb-8804-42d5-a5cf-1d2d97476fab'}
                                         }).then(response => {
                                             debugger
                                             if (response.data.resultCode === 0) {
                                                 props.yesFollow(u.id)
                                             }
                                         })
                                     }} className={U.but}> Yes follow </button>}
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

export default Users;

// import React from "react";
// import U from "./Users.module.css";
// import * as axios from "axios";
// import avaUsers from "./../../image/avaUsers.jpg"
//
//
//
// const Users = (props) => {
//     const addSetUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 props.setUsers(response.data.items);
//             });
//
//         }
//     };
//
//     return (
//         <div>
//             {props.users.map(u => <div key={u.id} className={U.wrapper}>
//                  <span>
//                    <div> <img src={u.photos.small != null ? u.photos.small : avaUsers} className={U.ava} alt={'ava'}/> </div>
//                      <div> {u.followed
//                          ?
//                          <button onClick={() => {
//                              props.follow(u.id)
//                          }} className={U.but}> Follow </button>
//                          :
//                          <button onClick={() => {
//                              props.notFollow(u.id)
//                          }} className={U.but}> Not follow </button>}
//                      </div>
//                  </span>
//                 <span className={U.wrapper}>
//                     <span className={U.wrapperName}>
//                         <div className={U.name}>{u.name}</div>
//                         <div>{'u.status'}</div>
//                     </span>
//                     <span>
//                         <div className={U.city}>{'u.userCity'}</div>
//                         <div>{'u.userCountry'}</div>
//                     </span>
//                 </span>
//             </div>)}
//             <button onClick={addSetUsers}>add users</button>
//         </div>
//     )
// };
//
// export default Users;
//

// props.setUsers(  [
//         {
//             id: 0,
//             avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
//             followed: true,
//             fullName: 'Bryndzak Roman',
//             status: 'React-Redux, it\'s good.',
//             userCity: 'Khmelnytskyi',
//             userCountry: 'Ukraine'
//         },
//         {
//             id: 1, avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
//             followed: false,
//             fullName: 'Боднрук Вася',
//             status: 'Life, it\'s good.',
//             userCity: 'Gvizdets',
//             userCountry: 'Ukraine'
//         },
//         {
//             id: 2, avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
//             followed: false,
//             fullName: 'Bryndzak Rostyslav',
//             status: 'La-la-la-la.',
//             userCity: 'Derazhnya',
//             userCountry: 'Ukraine'
//         },
//         {
//             id: 3, avaUsers: 'https://i.pinimg.com/236x/11/82/ba/1182baa6a3fa464487fca0f7f1979e0a.jpg',
//             followed: true,
//             fullName: 'Bryndzak Mike',
//             status: 'I study React-Redux.',
//             userCity: 'L\'viv',
//             userCountry: 'Ukraine'
//         },
//     ]
// )