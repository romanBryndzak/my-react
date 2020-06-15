import {identificationMeThunk} from "./AuthenticReducer";

const initializedAC = 'initializedAC';

let initialAppState = {
    initialized: false
};

const AppReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case initializedAC:
            return {
                ...state, initialized: true
            };
        default:
            return state;
    }
};

export const setInitialized = () => ({type: initializedAC});

export const initializeThunk = () => (dispatch) => {
        let promise = dispatch(identificationMeThunk());
        Promise.all([promise])
            .then(() => {
                dispatch(setInitialized())
            })
};

export default AppReducer;