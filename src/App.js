import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import News from "./Page/News/News";
import Music from "./Page/Music/Music";
import Settings from "./Page/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import MessagesContainer from "./Page/Messages/MessagesContainer";
import UsersContainer from "./Page/Users/UsersContainer";
import ProfileContainer from "./Page/Portfolio/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Page/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeThunk} from "./BLL/appReducer";
import Preloader from "./components/axiliary/preloader";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunk();
    }

    render() {
         if(!this.props.initialized) return <Preloader/>;
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Menu/>
                <div className={'page'}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/messages'} render={() => <MessagesContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/settings'} render={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeThunk})
)(App);
