import React from "react";
import M from "./Messages.module.css";
import Message from "./Message/Message";
import Interlocutor from "./Interlocutor/Interlocutor";

const Messages = (props) => {

    const InterlocutorElement = props.interlocutors.map(i =>
        <Interlocutor id={i.id} name={i.name} key={i.id}/>);
    const MessageElement = props.messages.map(m =>
        <Message id={m.id} message={m.message} key={m.id}/>);

    return (
        <div className={M.wrapper}>
            <div>
                {InterlocutorElement}
            </div>
            <div>
                {MessageElement}
            </div>
            <div>

            </div>
        </div>
    )
};

export default Messages;