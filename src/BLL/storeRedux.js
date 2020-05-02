import {combineReducers, createStore,} from "redux";
import ProfileReducer from "./ProfleReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: ProfileReducer,
    messages: messagesReducer,
    users: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;