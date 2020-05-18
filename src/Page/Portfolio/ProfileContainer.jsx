import React from "react";
import {connect} from "react-redux";
import {
    addPostAction, setUserProfile, showUserProfile, updateNewTextAction,
    getStatusThunk, updateStatusThunk
} from "../../BLL/ProfleReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";

class ProfileContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7755
        }
        this.props.showUserProfile(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status
});

export default compose (connect(mapStateToProps,
    { setUserProfile, addPostAction, updateNewTextAction, showUserProfile,
        getStatusThunk, updateStatusThunk}),
    withRouter
) (ProfileContainerAPI);



// let ComponentWithRouterURL = withRouter(ProfileContainerAPI);
// const ProfileContainer = connect(mapStateToProps, {
//     setUserProfile, addPostAction, updateNewTextAction, showUserProfile
// })(ComponentWithRouterURL);
//
// export default ProfileContainer;
