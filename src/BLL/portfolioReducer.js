const addPost = 'addPost';
const updateNewText = 'updateNewText';

let initialPortfolioState = {
    posts: [
        {id: 0, message: 'Hello!', like: 10},
        {id: 1, message: 'How are you.', like: 8},
        {id: 2, message: 'I am fine, thank you. And you?', like: 0}
    ],
    newPostText: 'Hello React!'
};

const portfolioReducer = (state = initialPortfolioState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 3,
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
            let stateCopy = {...state};
            stateCopy.newPostText = (action.newText);
            return stateCopy;
        }
        default:
            return state;
    }
};
export const addPostAction = () => ({type: addPost});
export const updateNewTextAction = (text) => ({type: updateNewText, newText: text});

export default portfolioReducer;