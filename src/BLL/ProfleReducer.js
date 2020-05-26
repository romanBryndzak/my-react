import {ProfileAPI} from "../api/api";

const addPost = 'addPost';
const updateNewText = 'updateNewText';
const setUserProfileAC = 'set_User_Profile';
const setStatusAC = 'getStatus';

let initialProfileState = {
    posts: [
        {id: 0, message: 'Hello!', like: 10},
        {id: 1, message: 'How are you.', like: 8},
        {id: 2, message: 'I am fine, thank you. And you?', like: 0}
    ],
    newPostText: 'Hello React!',
    profile: null,
    status: ''
};

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case addPost: {
            let postsLength = state.posts.length;
            for (let i = state.posts.length; i > state.posts.length; i++){}
            let newPost = {
                id: postsLength,
                message: state.newPostText,
                like: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case updateNewText: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case setUserProfileAC: {
            return {...state, profile: action.profile}
        }
        case setStatusAC: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
};

export const addPostAction = () => ({type: addPost});
export const updateNewTextAction = (text) => ({type: updateNewText, newText: text});
export const setUserProfile = (profile) => ({type: setUserProfileAC, profile});
export const setStatus = (data) => ({type: setStatusAC, status: data});

export const showUserProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.userProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
};

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
};

export default ProfileReducer;