import {authenticMeAPI, identificationMeAPI} from "../api/api";

const setUserDataAC = 'setUserDataAC';

let initialAuthenticState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const AuthenticReducer = (state = initialAuthenticState, action) => {
    switch (action.type) {
        case setUserDataAC:
            return {
                ...state, ...action.data, isAuth: true
            };
        default:
            return state;
    }
};

export const setUserData = (userId, email, login) => ({type: setUserDataAC, data: {userId, email, login}});

export const identificationMeThunk = () => {
    return (dispatch) => {
        authenticMeAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data;
                dispatch(setUserData(userId, email, login))
            }
        });
    }
};

export const loginThunk = () => {
    return (dispatch) => {
        authenticMeAPI.login().then(response => {
            if (response.data.resultCode === 0) {

            }
                })
    }
};

export default AuthenticReducer;