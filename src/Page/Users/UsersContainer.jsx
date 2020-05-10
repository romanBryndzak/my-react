import React from "react";
import {connect} from "react-redux";
import {
    yesFollow, getTotalUsersCount, notFollow, setCurrentPage, setUsers, toggleIsFetching, fixedFollowedButtonStatus
} from "../../BLL/usersReducer";
import Users from "./Users";
import Preloader from "../../components/common/preloader";
import {getDataUsers,} from "../../api/api";


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getDataUsers.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.getTotalUsersCount(data.totalCount);
            });
    }

    onChangedPageNumber = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        getDataUsers.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.getTotalUsersCount(data.totalCount);
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
                followedStatus={this.props.followedStatus}
                onChangedPageNumber={this.onChangedPageNumber}
                yesFollow={this.props.yesFollow}
                notFollow={this.props.notFollow}
                fixedFollowedButtonStatus={this.props.fixedFollowedButtonStatus}
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
        isFetching: state.users.isFetching,
        followedStatus: state.users.followedStatus
    }
};

const UsersContainer = connect(mapStateToProps,
    {
        yesFollow, getTotalUsersCount, notFollow, setCurrentPage,
        setUsers, toggleIsFetching, fixedFollowedButtonStatus
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
