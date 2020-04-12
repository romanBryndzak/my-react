import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Portfolio from "./Page/Portfolio/Portfolio";
import Messages from "./Page/Messages/Messages";
import MyFriends from "./Page/MyFriends/MyFriends";
import News from "./Page/News/News";
import Music from "./Page/Music/Music";
import Settings from "./Page/Settings/Settings";
import {Route} from "react-router-dom";


function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Menu/>
            <div className={'page'}>
                <Route path={'/portfolio'} render={() =>
                    <Portfolio
                        posts={props.state.portfolio.posts}
                        newPostText={props.state.portfolio.newPostText}
                        dispatch={props.dispatch}
                    />
                }/>
                <Route path={'/messages'} render={() =>
                    <Messages
                        interlocutors={props.state.messages.interlocutors}
                        messages={props.state.messages.messages}
                        newMessageText={props.state.messages.newMessageText}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                    />
                }/>
                <Route path={'/news'} render={() =>
                    <News/>
                }/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/settings'} render={Settings}/>
                <Route path={'/myFriends'} render={MyFriends}/>
            </div>
        </div>
    );
}

export default App;
