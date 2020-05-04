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

export default AuthenticReducer;