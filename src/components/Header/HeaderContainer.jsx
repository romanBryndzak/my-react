import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../BLL/AuthenticReducer";
import * as axios from "axios";

class HeaderContainerApi extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    this.props.setUserData(userId, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authentic.isAuth,
    login: state.authentic.login
});

const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderContainerApi);

export default HeaderContainer;