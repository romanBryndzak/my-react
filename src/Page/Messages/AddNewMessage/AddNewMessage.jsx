import React from "react";
import aNM from "./AddNewMessage.module.css";

let AddNewMessage = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage()
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={aNM.wrapper}>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} className={aNM.text}/>
            <button onClick={addMessage} className={aNM.but}>Add message</button>
        </div>
    )
};

export default AddNewMessage;