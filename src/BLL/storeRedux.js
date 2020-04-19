import {combineReducers, createStore,} from "redux";
import portfolioReducer from "./portfolioReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    portfolio: portfolioReducer,
    messages: messagesReducer,
    users: usersReducer,
});

let store = createStore(reducers);

export default store;