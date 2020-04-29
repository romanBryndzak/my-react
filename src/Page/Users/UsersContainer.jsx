import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getTotalUsersCountAC, notFollowAC, setCurrentPageAC, setUsersAC} from "../../BLL/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsers: state.users.totalUsers,
        currentPage: state.users.currentPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        yesFollow: (userId) => {
            dispatch(followAC(userId));
        },
        notFollow: (userId) => {
            dispatch(notFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        getTotalUsersCount: (totalCount) => {
            dispatch(getTotalUsersCountAC(totalCount))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;