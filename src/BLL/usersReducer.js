const onFollow = 'on_follow';
const onNotFollow = 'on_notFollow';
const onSetUsers = 'on_SetUsers';
const setCurrentPage = 'set_Current_Page ';
const getTotalUsersCount = 'get_Total_Users_Count ';

let initialUsersState = {
    users: [],
    pageSize: 30,
    totalUsers: 0,
    currentPage: 1
};

const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case onFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false};
                    return u
                })
            };
        case onNotFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true};
                    return u
                })
            };
        case onSetUsers:
            return {
                ...state, users: action.users
            };
        case setCurrentPage:
            return {
                ...state, currentPage: action.currentPage
            };
        case getTotalUsersCount:
            debugger
            return {
                ...state, totalUsers: action.totalCount
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: onFollow, userId});
export const notFollowAC = (userId) => ({type: onNotFollow, userId});
export const setUsersAC = (users) => ({type: onSetUsers, users});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const getTotalUsersCountAC = (totalCount) => ({type: getTotalUsersCount, totalCount});

export default usersReducer;