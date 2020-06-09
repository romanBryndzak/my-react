export const getUsers = (state) => {
    return state.users.users
};
export const getPageSize = (state) => {
    return state.users.pageSize
};
export const getTotalUsers = (state) => {
    return state.users.totalUsers
};
export const getCurrentPage = (state) => {
    return state.users.currentPage
};
export const getIsFetching = (state) => {
    return state.users.isFetching
};
export const getFollowedStatus = (state) => {
    return state.users.followedStatus
};
export const getIsAuth = (state) => {
    return state.authentic.isAuth
};
export  const getProfile = (state) => {
    return state.profile.profile
};
export const getStatus = (state) => {
    return state.profile.status
};
export const getId = (state) => {
    return state.authentic.id
};