import React from "react";
import {connect} from "react-redux";
import {
    yesFollow, getTotalUsersCount, notFollow, setCurrentPage, setUsers, toggleIsFetching
} from "../../BLL/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../components/common/preloader";


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.getTotalUsersCount(response.data.totalCount);
            });

    }

    onChangedPageNumber = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.getTotalUsersCount(response.data.totalCount);
            })
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsers={this.props.totalUsers}
                onChangedPageNumber={this.onChangedPageNumber}
                yesFollow={this.props.yesFollow}
                notFollow={this.props.notFollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsers: state.users.totalUsers,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
};

const UsersContainer = connect(mapStateToProps,
    {
        yesFollow, getTotalUsersCount, notFollow, setCurrentPage,
        setUsers, toggleIsFetching
    }
)(UsersContainerAPI);

export default UsersContainer;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         yesFollow: (userId) => {
//             dispatch(yesFollow(userId));
//         },
//         notFollow: (userId) => {
//             dispatch(notFollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage));
//         },
//         getTotalUsersCount: (totalCount) => {
//             dispatch(getTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// };
