import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {identificationMeThunk} from "../../BLL/AuthenticReducer";

class HeaderContainerApi extends React.Component {
    componentDidMount() {
        this.props.identificationMeThunk();
    }

    render() {
        return <Header {...this.props}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authentic.isAuth,
    login: state.authentic.login
});

const HeaderContainer = connect(mapStateToProps, {identificationMeThunk})(HeaderContainerApi);

export default HeaderContainer;