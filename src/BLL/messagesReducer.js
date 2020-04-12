const addMessage = 'addMessage';
const updateNewMessageText = ' updateNewMessageText';

let initialMessagesState = {
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
};

const messagesReducer = (state = initialMessagesState, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case  updateNewMessageText:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageAction = () => ({type:addMessage});
export const updateNewMessageTextAction = (text) => ({type: updateNewMessageText, newText: text});

export default messagesReducer;