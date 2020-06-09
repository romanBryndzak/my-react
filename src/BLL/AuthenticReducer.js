import {authenticAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const setUserDataAC = 'setUserDataAC';

let initialAuthenticState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const AuthenticReducer = (state = initialAuthenticState, action) => {
    switch (action.type) {
        case setUserDataAC:
            return {
                ...state, ...action.newData
            };
        default:
            return state;
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: setUserDataAC,
    newData: {id: userId, email, login, isAuth}
});

export const identificationMeThunk = () => (dispatch) => {
    authenticAPI.me()
        .then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setUserData(id, email, login, true))
        }
    });
};

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authenticAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(identificationMeThunk())
                } else {
                    let message = (response.data.messages.length > 0 ? response.data.messages[0] : "Some error!");
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
};

export const logoutThunk = () => {
    return (dispatch) => {
        authenticAPI.logout()
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
};

export default AuthenticReducer;