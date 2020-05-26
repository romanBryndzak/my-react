import React from "react";
import NM from "./NewMessage.module.css";
import {Field, reduxForm} from "redux-form";

const NewMessage = (props) => {

    const AddNewMessage =(values) => {
        let text = values.newMessageText;
        props.AddNewMessage(text);
    };

    return (
        <div className={NM.wrapper}>
            <AddNewMessageFormRedux onSubmit={AddNewMessage}/>
        </div>
    )
};

const AddNewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'Please enter your message'} className={NM.text}/>
            <button className={NM.but}>Add message</button>
        </form>
    )
};

const AddNewMessageFormRedux = reduxForm({form:'AddNewMessage'})(AddNewMessageForm);

export default NewMessage;