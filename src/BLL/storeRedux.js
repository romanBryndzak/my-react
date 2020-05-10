import {applyMiddleware, combineReducers, createStore,} from "redux";
import ProfileReducer from "./ProfleReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import AuthenticReducer from "./AuthenticReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profile: ProfileReducer,
    messages: messagesReducer,
    users: usersReducer,
    authentic: AuthenticReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;

export default store;