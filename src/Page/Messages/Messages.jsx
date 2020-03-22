import React from "react";
import M from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = (props) => {

    const MessageElement = props.messages.map(m =>
        <Message id={m.id} message={m.message} key={m.id}/>);

    return (
        <div>
            <div>

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