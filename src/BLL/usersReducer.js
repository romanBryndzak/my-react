import {followedApi, getDataUsers} from "../api/api";
import {updateObjectInArray} from "../auxiliary/updateObject";

const onFollowAC = 'on_follow';
const onNotFollowAC = 'on_notFollow';
const onSetUsersAC = 'on_SetUsers';
const setCurrentPageAC = 'set_Current_Page ';
const getTotalUsersCountAC = 'get_Total_Users_Count ';
const toggleIsFetchingAC = 'toggle_Is_Fetching';
const followedButtonStatusAC = 'followed_Button_Status';

let initialUsersState = {
    users: [],
    followed: false,
    pageSize: 30,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    followedStatus: []
};

const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case onFollowAC:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case onNotFollowAC:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case onSetUsersAC:
            return {
                ...state, users: action.users
            };
        case setCurrentPageAC:
            return {
                ...state, currentPage: action.currentPage
            };
        case getTotalUsersCountAC:
            return {
                ...state, totalUsers: action.totalCount
            };
        case toggleIsFetchingAC:
            return {
                ...state, isFetching: action.isFetching
            };
        case followedButtonStatusAC: {
            return {
                ...state,
                followedStatus: action.statusFollowed
                    ? [...state.followedStatus, action.userId]
                    : state.followedStatus.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const yesFollow = (userId) => ({type: onFollowAC, userId});
export const notFollow = (userId) => ({type: onNotFollowAC, userId});
export const setUsers = (users) => ({type: onSetUsersAC, users});
export const setCurrentPage = (currentPage) => ({type: setCurrentPageAC, currentPage});
export const getTotalUsersCount = (totalCount) => ({type: getTotalUsersCountAC, totalCount});
export const toggleIsFetching = (isFetching) => ({type: toggleIsFetchingAC, isFetching});
export const fixedFollowedButtonStatus = (statusFollowed, id) => ({
    type: followedButtonStatusAC, statusFollowed, userId: id
});

const followNotFollowBox = async (dispatch, userId, apiMethod, actionStatus) => {
    dispatch(fixedFollowedButtonStatus(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionStatus(userId))
    }
    dispatch(fixedFollowedButtonStatus(false, userId));
};

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await getDataUsers.getUsers(currentPage, pageSize);

    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(getTotalUsersCount(data.totalCount));
};

export const notFollowButtonStatusThunk = (userId) => async (dispatch) => {
    await followNotFollowBox(dispatch, userId, followedApi.notFollowedUsers, notFollow)
};

export const followButtonStatusThunk = (userId) => async (dispatch) => {
    await followNotFollowBox(dispatch, userId, followedApi.yesFollowedUsers, yesFollow)
};

export default usersReducer;


// export const followButtonStatusThunk = (userId) => (dispatch) => {
//     dispatch(fixedFollowedButtonStatus(true, userId));
//     followedApi.yesFollowedUsers(userId).then(data => {
//         if (data.resultCode === 0) {
//             dispatch(yesFollow(userId))
//         }
//         dispatch(fixedFollowedButtonStatus(false, userId));
//     })
// };

// case onNotFollowAC:
//     return {
//         ...state,
//         users: state.users.map(u => {
//             if (u.id === action.userId)
//                 return {...u, followed: false};
//             return u
//         })
//     };