import React from "react";
import messagesReducer, {AddNewMessageAction} from "./messagesReducer";

let state = {
    messages: [
        {id: 0, message: 'Hello!'},
        {id: 1, message: 'What do you do?'},
        {id: 2, message: 'I study React.'},
        {id: 3, message: 'How old are you?'},
        {id: 4, message: 'I don`t  answer personal questions!'}
    ]
};

test('Length messages should be decrement', () => {
    let action = AddNewMessageAction('Hello');
    let newState = messagesReducer(state, action);
    expect(newState.messages.length).toBe(6)
});

test('Text new message should be correct', () => {
    let action = AddNewMessageAction('Hello');
    let newState = messagesReducer(state, action);
    expect(newState.messages[5].message).toBe('Hello')
});
