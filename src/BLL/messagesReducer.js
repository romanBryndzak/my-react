const AddNewMessage = ' AddNewMessage';

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
    ]
};

const messagesReducer = (state = initialMessagesState, action) => {
    switch (action.type) {
        case AddNewMessage: {
            let MessageText = action.newMessageText;
            let messageLength = state.messages.length;
            console.log(messageLength);
                for (let i = state.messages.length; state.messages.length < i; i++ ){}

            return {
                ...state,
                messages:[...state.messages, {id: messageLength, message: MessageText}]
            };
        }
        default:
            return state;
    }
};

export const AddNewMessageAction = (text) => ({type: AddNewMessage, newMessageText: text});

export default messagesReducer;


// case AddNewMessage: {
//     let newMessage = {
//         id: 5,
//         message: action.newMessageText,
//     };
//     let stateCopy = {...state};
//     stateCopy.messages = [...state.messages];
//     stateCopy.messages.push(newMessage);
//     return stateCopy;
// }