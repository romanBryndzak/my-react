let store = {
    _state: {
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
            ],
            newMessageText: 'Hello. My name Illia, I am from Ukraine.'
        }
    },

    getState() {
        return this._state;
    },

    _callSubscribe() {
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messages.newMessageText,
        };
        this._state.messages.messages.push(newMessage);
        this._callSubscribe(this._state);
    },

    updateNewMessageText(newText) {
        this._state.messages.newMessageText = (newText);
        this._callSubscribe(this._state);
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.portfolio.newPostText,
            like: 0
        };
        this._state.portfolio.posts.push(newPost);
        this._callSubscribe(this._state);
    },

    updateNewText(newText) {
        this._state.portfolio.newPostText = (newText);
        this._callSubscribe(this._state);
    },

    subscribe(observer) {
        this._callSubscribe = observer;
    },
};

window.store = store;
export default store;