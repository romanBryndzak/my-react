import React from "react";
import m from "./Message.module.css";

const Message = (props) => {

    return (
        <div className={m.wrapper}>
            <div className={m.message}>
                {props.message}
            </div>
        </div>
    )
};

export default Message;