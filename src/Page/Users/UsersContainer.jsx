import React from "react";
import {connect} from "react-redux";
import {
    getUsersThunk, notFollowButtonStatusThunk, followButtonStatusThunk
} from "../../BLL/usersReducer";
import Users from "./Users";
import Preloader from "../../components/common/preloader";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onChangedPageNumber = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize)
    };

    render() {
        if (this.props.isAuth === false) return <Redirect to={'/login'}/>;
            return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsers={this.props.totalUsers}
                    followedStatus={this.props.followedStatus}
                    onChangedPageNumber={this.onChangedPageNumber}
                    followButtonStatusThunk={this.props.followButtonStatusThunk}
                    notFollowButtonStatusThunk={this.props.notFollowButtonStatusThunk}
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
        followedStatus: state.users.followedStatus,
        isAuth: state.authentic.isAuth
    }
};

export default compose(
    connect(mapStateToProps,
        { getUsersThunk, notFollowButtonStatusThunk, followButtonStatusThunk}
    ), withAuthRedirect
) (UsersContainerAPI);


// const UsersContainer = connect(mapStateToProps,
//     {
//         getUsersThunk, notFollowButtonStatusThunk, followButtonStatusThunk
//     }
// )(UsersContainerAPI);
//
// export default UsersContainer;

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
