import {authenticAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const setUserDataAC = 'setUserDataAC';
const setCaptchaUrlAC = 'setCaptchaUrlAC';

let initialAuthenticState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const AuthenticReducer = (state = initialAuthenticState, action) => {
    switch (action.type) {
        case setUserDataAC:
        case setCaptchaUrlAC:
            return {
                ...state, ...action.newData
            };
        default:
            return state;
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: setUserDataAC, newData: {userId, email, login, isAuth}
});
export const setCaptchaUrl = (captchaUrl) => ({type: setCaptchaUrlAC, newData: {captchaUrl}});

export const identificationMeThunk = () => async (dispatch) => {
    let response = await authenticAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true))
    }
};

export const loginThunk = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authenticAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(identificationMeThunk())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrlThunk())
                    }
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

export const getCaptchaUrlThunk = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
};

export default AuthenticReducer;