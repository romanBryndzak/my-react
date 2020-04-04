import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import state,
{addMessage, addPost, subscribe, updateNewMessageText, updateNewText}
    from "./BLL/state";

let renderDomTree = (state) => {
    ReactDOM.render((
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewText={updateNewText}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>),
        document.getElementById('root'));
};

renderDomTree(state);
subscribe(renderDomTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
