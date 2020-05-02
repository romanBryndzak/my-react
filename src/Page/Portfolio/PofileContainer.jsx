import React from "react";
import *as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../BLL/ProfleReducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

class PortfolioContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ComponentWithRouterURL);

export default ProfileContainer;
