import React from "react";
import {connect} from "react-redux";
import {
    addPostAction, setUserProfile, showUserProfile, updateNewTextAction,
    getStatusThunk, updateStatusThunk
} from "../../BLL/ProfleReducer";
import {Redirect, withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {getId, getIsAuth, getProfile, getStatus} from "../../BLL/Selector/Selector";


class ProfileContainerAPI extends React.Component {

    renderProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.showUserProfile(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount() {
        this.renderProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id !== this.props.id) {
            this.renderProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    id: getId(state),
    isAuth: getIsAuth(state)
});

export default compose(connect(mapStateToProps,
    {
        setUserProfile, addPostAction, updateNewTextAction, showUserProfile,
        getStatusThunk, updateStatusThunk
    }),
    withRouter
)(ProfileContainerAPI);


// let ComponentWithRouterURL = withRouter(ProfileContainerAPI);
// const ProfileContainer = connect(mapStateToProps, {
//     setUserProfile, addPostAction, updateNewTextAction, showUserProfile
// })(ComponentWithRouterURL);
//
// export default ProfileContainer;
