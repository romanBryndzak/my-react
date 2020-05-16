import React from "react";
import {connect} from "react-redux";
import {addPostAction, setUserProfile, showUserProfile, updateNewTextAction} from "../../BLL/ProfleReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";

class ProfileContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.showUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile
});

export default compose (connect(mapStateToProps,
    { setUserProfile, addPostAction, updateNewTextAction, showUserProfile}),
    withRouter
) (ProfileContainerAPI);



// let ComponentWithRouterURL = withRouter(ProfileContainerAPI);
// const ProfileContainer = connect(mapStateToProps, {
//     setUserProfile, addPostAction, updateNewTextAction, showUserProfile
// })(ComponentWithRouterURL);
//
// export default ProfileContainer;
