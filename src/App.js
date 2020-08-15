import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import News from "./Page/News/News";
import Music from "./Page/Music/Music";
import Settings from "./Page/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./Page/Users/UsersContainer";
import ProfileContainer from "./Page/Portfolio/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeThunk} from "./BLL/appReducer";
import Preloader from "./auxiliary/preloader";
import store from "./BLL/storeRedux";
import {BrowserRouter} from "react-router-dom";
import {withReactSuspense} from "./hok/ReactSuspense";


const MessagesContainer = React.lazy(() => {
    return import("./Page/Messages/MessagesContainer");
});
const Login = React.lazy(() => {
    return import("./Page/Login");
});


class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunk();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Menu/>
                <div className={'page'}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/messages'} render={withReactSuspense(MessagesContainer)}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/settings'} render={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() =>
                        <React.Suspense fallback={<strong><h2>...Loading</h2></strong>}>
                            <Login/>
                        </React.Suspense>}
                    />
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

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeThunk})
)(App);

const SocialNetworkApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocialNetworkApp;