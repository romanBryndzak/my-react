import React from "react";
import Paginator from "../../auxiliary/Paginator";
import User from "./User";

const Users = React.memo(function Users(props) {
    return (
        <div>

            <Paginator
                totalUsers={props.totalUsers}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onChangedPageNumber={props.onChangedPageNumber}
                portionSize ={15}
            />
            <User
                users={props.users}
                followedStatus={props.followedStatus}
                followButtonStatusThunk={props.followButtonStatusThunk}
                notFollowButtonStatusThunk={props.notFollowButtonStatusThunk}
            />
        </div>
    )
});

export default Users;


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

// const Users = (props) => {
//     let pageCount = Math.ceil(props.totalUsers / props.pageSize);
//     let pages = [];
//     for (let i = 1; i <= pageCount; i++) {
//         pages.push(i);
//     }
//
//     return (
//         <div>
//             <div className={U.numberPage}> {pages.map(p => {
//                 return (
//                     <span className={props.currentPage === p && U.selectPage}
//                           onClick={() => {
//                               props.onChangedPageNumber(p)
//                           }}
//                     >{p + ', '}</span>
//                 )
//             })}
//             </div>
//             {props.users.map(u =>
//                 <div key={u.id} className={U.wrapper}>
//                              <span>
//                                <NavLink to={'/profile/' + u.id}>
//                                    <img src={u.photos.small != null ? u.photos.small : avaUsers}
//                                         className={U.ava}
//                                         alt={'ava'}/>
//                                </NavLink>
//                                  <div className={U.BUT}> {u.followed
//                                      ?
//                                      <button disabled={props.followedStatus.some(id => id === u.id)}
//                                              onClick={() => {
//                                                  props.notFollowButtonStatusThunk(u.id)
//                                              }} className={U.but}> Not follow </button>
//                                      :
//                                      <button disabled={props.followedStatus.some(id => id === u.id)}
//                                              onClick={() => {
//                                                  props.followButtonStatusThunk(u.id)
//                                              }} className={U.but}> Yes follow </button>}
//                                  </div>
//                              </span>
//                     <span className={U.wrapper}>
//                                 <span className={U.wrapperName}>
//                                     <div className={U.name}>{u.name}</div>
//                                     <div>{'u.status'}</div>
//                                 </span>
//                                 <span>
//                                     <div className={U.city}>{'u.userCity'}</div>
//                                     <div>{'u.userCountry'}</div>
//                                 </span>
//                             </span>
//                 </div>
//             )}
//         </div>
//     )
// };

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
//             fullName: 'Боднaрук Вася',
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