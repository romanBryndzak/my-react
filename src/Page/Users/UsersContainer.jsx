import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, notFollowAC, setUsersAC} from "../../BLL/usersReducer";

const mapStateToProps = (state) => {
    return {users: state.users.users}
};
const mapDispatchToProps = (dispatch) => {
    return {
        yesFollow:(userId) => {
            dispatch(followAC(userId));
        },
        notFollow:(userId) => {
            dispatch(notFollowAC(userId));
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;