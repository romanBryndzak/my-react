const onFollowAC = 'on_follow';
const onNotFollowAC = 'on_notFollow';
const onSetUsersAC = 'on_SetUsers';
const setCurrentPageAC = 'set_Current_Page ';
const getTotalUsersCountAC = 'get_Total_Users_Count ';
const toggleIsFetchingAC = 'toggle_Is_Fetching';

let initialUsersState = {
    users: [],
    followed: false,
    pageSize: 30,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case onFollowAC:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true};
                    return u
                })
            };
        case onNotFollowAC:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false};
                    return u
                })
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

export default usersReducer;