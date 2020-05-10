import React from "react";
import {connect} from "react-redux";
import {addPostAction, setUserProfile, updateNewTextAction} from "../../BLL/ProfleReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {showUserProfile} from "../../api/api";

class PortfolioContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        showUserProfile.userProfile(userId).then(data => {
            this.props.setUserProfile(data)
        });
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

let ComponentWithRouterURL = withRouter(PortfolioContainerAPI);

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    addPostAction,
    updateNewTextAction
})(ComponentWithRouterURL);

export default ProfileContainer;
