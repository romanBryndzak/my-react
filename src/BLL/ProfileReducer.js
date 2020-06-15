import {ProfileAPI} from "../api/api";

const updateNewTextAC = 'updateNewTextAC';
const setUserProfileAC = 'set_User_ProfileAC';
const setStatusAC = 'setStatusAC';
const deletePostAC = 'deletePostAC';

let initialProfileState = {
    posts: [
        {id: 0, message: 'Hello!', like: 10},
        {id: 1, message: 'How are you.', like: 8},
        {id: 2, message: 'I am fine, thank you. And you?', like: 0}
    ],
    profile: null,
    status: ''
};

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case updateNewTextAC: {
            let postsLength = state.posts.length;
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
            return {...state,posts: state.posts.filter(p => p.id !== action.postId)}
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

export const updateNewTextAction = (text) => ({type: updateNewTextAC, newText: text});
export const setUserProfileAction = (profile) => ({type: setUserProfileAC, profile});
export const setStatusAction = (data) => ({type: setStatusAC, status: data});
export const deletePostAction = (postId) => ({type: deletePostAC, postId});

export const showUserProfileThunk = (userId) => {
    return (dispatch) => {
        ProfileAPI.userProfile(userId).then(data => {
            dispatch(setUserProfileAction(data));
        });
    }
};

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatusUser(userId).then(data => {
            dispatch(setStatusAction(data))
        })
    }
};

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAction(status))
            }
        })
    }
};

export default ProfileReducer;

// case addPostAC: {
//     let postsLength = state.posts.length;
//     for (let i = state.posts.length; i > state.posts.length; i++) {
//     }
//     let newPost = {
//         id: postsLength,
//         message: state.newPostText,
//         like: 0
//     };
//     let stateCopy = {...state};
//     stateCopy.posts = [...state.posts];
//     stateCopy.posts.push(newPost);
//     stateCopy.newPostText = '';
//     return stateCopy;
// }
// export const addPostAction = () => ({type: addPostAC});