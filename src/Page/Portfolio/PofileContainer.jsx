import React from "react";
import {connect} from "react-redux";
import {addPostAction, setUserProfile, showUserProfile, updateNewTextAction} from "../../BLL/ProfleReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

class PortfolioContainerAPI extends React.Component {
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

let ComponentWithRouterURL = withRouter(PortfolioContainerAPI);

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    addPostAction,
    updateNewTextAction,
    showUserProfile
})(ComponentWithRouterURL);

export default ProfileContainer;
