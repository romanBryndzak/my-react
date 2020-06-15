import {applyMiddleware, combineReducers, createStore,} from "redux";
import ProfileReducer from "./ProfileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import AuthenticReducer from "./AuthenticReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import AppReducer from "./appReducer";

let reducers = combineReducers({
    profile: ProfileReducer,
    messages: messagesReducer,
    users: usersReducer,
    authentic: AuthenticReducer,
    app: AppReducer,
    form:formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;

export default store;