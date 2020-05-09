import React from "react";
import aNM from "./AddNewMessage.module.css";


const AddNewMessage = (props) => {

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.onMessageChange(text);
    };

    return (
        <div className={aNM.wrapper}>
            <textarea onChange={onMessageChange} value={props.newMessageText} className={aNM.text}/>
            <button onClick={addMessage} className={aNM.but}>Add message</button>
        </div>
    )
};

export default AddNewMessage;