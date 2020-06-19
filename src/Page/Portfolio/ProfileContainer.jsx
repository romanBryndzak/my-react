import React from "react";
import {connect} from "react-redux";
import {
    setUserProfileAction, showUserProfileThunk, updateNewTextAction,
    getStatusThunk, updateStatusThunk, savePhotoUserThunk
} from "../../BLL/ProfileReducer";
import Profile from "./Profile";
import {compose} from "redux";
import {getId, getIsAuth, getProfile, getStatus} from "../../BLL/Selector/Selector";
import {withRouter} from "react-router-dom";


class ProfileContainerAPI extends React.Component {

    renderProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.showUserProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount() {
        this.renderProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.renderProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     photos={this.props.photos}
                     savePhotoUserThunk={this.props.savePhotoUserThunk}
                     status={this.props.status}
                     updateStatusThunk={this.props.updateStatusThunk}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    id: getId(state),
    isAuth: getIsAuth(state),
    photos: state.profile.photos
});

export default compose(
    connect(mapStateToProps,
    {
        setUserProfileAction, updateNewTextAction, showUserProfileThunk,
        getStatusThunk, updateStatusThunk, savePhotoUserThunk
    }),
    withRouter
)(ProfileContainerAPI);


// let ComponentWithRouterURL = withRouter(ProfileContainerAPI);
// const ProfileContainer = connect(mapStateToProps, {
//     setUserProfileAction, addPostAction, updateNewTextAction, showUserProfile
// })(ComponentWithRouterURL);
//
// export default ProfileContainer;
