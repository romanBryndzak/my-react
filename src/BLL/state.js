let renderState = () => {
};

let state = {
    portfolio: {
        posts: [
            {id: 0, message: 'Hello!', like: 10},
            {id: 1, message: 'How are you.', like: 8},
            {id: 2, message: 'I am fine, thank you. And you?', like: 0}
        ],
        newPostText: 'Hello React!'
    },

    messages: {
        interlocutors: [
            {id: 0, name: 'Roman'},
            {id: 1, name: 'Ros'},
            {id: 2, name: 'Mike'},
            {id: 3, name: 'Pavlo'},
            {id: 4, name: 'Snezhka'},
            {id: 5, name: 'Illia'},
        ],
        messages: [
            {id: 0, message: 'Hello!'},
            {id: 1, message: 'What do you do?'},
            {id: 2, message: 'I study React.'},
            {id: 3, message: 'How old are you?'},
            {id: 4, message: 'I don`t  answer personal questions!'}
        ]
    }
};

window.state = state;
export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.portfolio.newPostText,
        like: 0
    };
    state.portfolio.posts.push(newPost);
    renderState(state);
};

export const updateNewText = (newText) => {
    state.portfolio.newPostText = (newText);
    renderState(state);
};

export const subscribe = (observer) => {
    renderState = observer;
};

export default state;