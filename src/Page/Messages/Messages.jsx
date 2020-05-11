import React from "react";
import M from "./Messages.module.css";
import Message from "./Message/Message";
import Interlocutor from "./Interlocutor/Interlocutor";
import AddNewMessage from "./AddNewMessage/AddNewMessage";
import {Redirect} from "react-router-dom";

const Messages = (props) => {

    const InterlocutorElement = props.interlocutors.map(i =>
        <Interlocutor id={i.id} name={i.name} key={i.id}/>);
    const MessageElement = props.messages.map(m =>
        <Message id={m.id} message={m.message} key={m.id}/>);
if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={M.wrapper}>
            <AddNewMessage
                newMessageText={props.newMessageText}
                addMessage={props.addMessage}
                onMessageChange={props.onMessageChange}
            />
            <div>
                {InterlocutorElement}
            </div>
            <div>
                {MessageElement}
            </div>
        </div>
    )
};

export default Messages;