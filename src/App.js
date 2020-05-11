import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import News from "./Page/News/News";
import Music from "./Page/Music/Music";
import Settings from "./Page/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./Page/Messages/MessagesContainer";
import UsersContainer from "./Page/Users/UsersContainer";
import ProfileContainer from "./Page/Portfolio/PofileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Menu/>
            <div className={'page'}>
                <Route path={'/portfolio/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/messages'} render={() => <MessagesContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/settings'} render={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'}/>
            </div>
        </div>
    );
}

export default App;
