import {combineReducers, createStore,} from "redux";
import portfolioReducer from "./portfolioReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
    portfolio: portfolioReducer,
    messages: messagesReducer,
});

let store = createStore(reducers);

export default store;