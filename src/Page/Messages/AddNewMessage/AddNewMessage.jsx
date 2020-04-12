import React from "react";
import aNM from "./AddNewMessage.module.css";
import {addMessageAction, updateNewMessageTextAction} from "../../../BLL/messagesReducer";

let AddNewMessage = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageAction());
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextAction(text));
        console.log(text)
    };

    return (
        <div className={aNM.wrapper}>
            <textarea onChange={onMessageChange} value={props.newMessageText} className={aNM.text}/>
            <button onClick={addMessage} className={aNM.but}>Add message</button>
        </div>
    )
};

export default AddNewMessage;