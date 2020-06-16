import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
        <SocialNetworkApp/>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let renderDomTree = () => {
//     ReactDOM.render((
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App
//                         state={state}
//                         store={store}
//                         dispatch={store.dispatch.bind(store)}
//                     />
//
//                 </Provider>
//             </BrowserRouter>),
//         document.getElementById('root'));
// };
//
// renderDomTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     renderDomTree(state);
// });
