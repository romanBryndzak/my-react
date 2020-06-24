import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const updateNewTextAC = 'updateNewTextAC';
const setUserProfileAC = 'set_User_ProfileAC';
const setStatusAC = 'setStatusAC';
const deletePostAC = 'deletePostAC';
const savePhotoUserAC = 'savePhotoUserAC';

const initialProfileState = {
    posts: [
        {id: 0, message: 'Hello!', like: 10},
        {id: 1, message: 'How are you.', like: 8},
        {id: 2, message: 'I am fine, thank you. And you?', like: 0}
    ],
    profile: null,
    status: '',
    photos: {large: null, small: null}
};

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case updateNewTextAC: {
            const postsLength = state.posts.length;
            for (let i = state.posts.length; i > state.posts.length; i++) {
            }
            return {
                ...state,
                posts: [...state.posts, {
                    id: postsLength,
                    message: action.newText,
                    like: 0
                }]
            }
        }
        case deletePostAC: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case setUserProfileAC: {
            return {...state, profile: action.profile}
        }
        case setStatusAC: {
            return {...state, status: action.status}
        }
        case savePhotoUserAC: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
};

export const updateNewTextAction = (text) => ({type: updateNewTextAC, newText: text});
export const setUserProfileAction = (profile) => ({type: setUserProfileAC, profile});
export const setStatusAction = (data) => ({type: setStatusAC, status: data});
export const deletePostAction = (postId) => ({type: deletePostAC, postId});
export const setSavePhotoUserAction = (photos) => ({type: savePhotoUserAC, photos});

export const showUserProfileThunk = (userId) => async (dispatch) => {
    const data = await ProfileAPI.userProfile(userId);
    dispatch(setUserProfileAction(data));
};

export const getStatusThunk = (userId) => async (dispatch) => {
    const data = await ProfileAPI.getStatusUser(userId);
    dispatch(setStatusAction(data))
};

export const updateStatusThunk = (status) => async (dispatch) => {
    const response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatusAction(status))
    }
};

export const savePhotoUserThunk = (photo) => async (dispatch) => {
    const response = await ProfileAPI.updatePhotoUser(photo);
    if (response.data.resultCode === 0) {
        dispatch(setSavePhotoUserAction(response.data.data.photos))
    }
};
export const saveInfoAboutUserThunk = (profile) => async (dispatch, getState) => {
    debugger
    const userId = getState().authentic.userId;
    const response = await ProfileAPI.updateInfoAboutUser(profile);
    debugger
    if (response.data.resultCode === 0) {
        dispatch(showUserProfileThunk(userId));

    } else {
        dispatch(stopSubmit('InfoAboutUser', {_error: response.data.messages}))
    }
};

export default ProfileReducer;

// case addPostAC: {
//     const postsLength = state.posts.length;
//     for (let i = state.posts.length; i > state.posts.length; i++) {
//     }
//     const newPost = {
//         id: postsLength,
//         message: state.newPostText,
//         like: 0
//     };
//     const stateCopy = {...state};
//     stateCopy.posts = [...state.posts];
//     stateCopy.posts.push(newPost);
//     stateCopy.newPostText = '';
//     return stateCopy;
// }
// export const addPostAction = () => ({type: addPostAC});