import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Portfolio from "./Page/Portfolio/Portfolio";
import News from "./Page/News/News";
import Music from "./Page/Music/Music";
import Settings from "./Page/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./Page/Messages/MessagesContainer";
import Users from "./Page/Users/Users";
import UsersContainer from "./Page/Users/UsersContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Menu/>
            <div className={'page'}>
                <Route path={'/portfolio'} render={() => <Portfolio/>}/>
                <Route path={'/messages'} render={() => <MessagesContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/settings'} render={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
