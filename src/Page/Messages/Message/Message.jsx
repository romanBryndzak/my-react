import React from "react";
import m from "./Message.module.css";

const Message = (props) => {

    return (
        <div>
            {props.message}
        </div>
    )
};

export default Message;