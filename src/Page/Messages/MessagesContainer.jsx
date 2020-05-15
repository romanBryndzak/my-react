import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import {addMessageAction, updateNewMessageTextAction} from "../../BLL/messagesReducer";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

const mapStateToProps = (state) => {
    debugger
    return {
        interlocutors: state.messages.interlocutors,
        messages: state.messages.messages,
        newMessageText: state.messages.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAction());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextAction(text));
        }
    }
};

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;


// <Messages
//     interlocutors={props.state.messages.interlocutors}
//     messages={props.state.messages.messages}
//     newMessageText={props.state.messages.newMessageText}
//     dispatch={props.dispatch}
// />