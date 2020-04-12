const addPost = 'addPost';
const updateNewText = 'updateNewText';

const portfolioReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case updateNewText:
            state.newPostText = (action.newText);
            return state;
        default:
            return state;
    }
};
export const addPostAction = () => ({type: addPost});
export const updateNewTextAction = (text) => ({type: updateNewText, newText: text});

export default portfolioReducer;