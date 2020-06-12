import React from "react";
import {connect} from "react-redux";
import {
    getUsersThunk, notFollowButtonStatusThunk, followButtonStatusThunk
} from "../../BLL/usersReducer";
import Users from "./Users";
import {compose} from "redux";
import Preloader from "../../components/axiliary/preloader";
import {
    getCurrentPage, getFollowedStatus,
    getIsFetching, getPageSize, getTotalUsers, getUsers
} from "../../BLL/Selector/Selector";


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onChangedPageNumber = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize)
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
                followButtonStatusThunk={this.props.followButtonStatusThunk}
                notFollowButtonStatusThunk={this.props.notFollowButtonStatusThunk}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followedStatus: getFollowedStatus(state)
    }
};

export default compose(
    connect(mapStateToProps,
        {getUsersThunk, notFollowButtonStatusThunk, followButtonStatusThunk}
    )
)(UsersContainerAPI);


// const mapDispatchToProps = (dispatch) => {
//     return {
//         yesFollow: (userId) => {
//             dispatch(yesFollow(userId));
//         },
//         notFollow: (userId) => {
//             dispatch(notFollow(userId));
//         }
//     }
// };
