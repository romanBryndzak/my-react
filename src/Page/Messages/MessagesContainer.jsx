import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import {AddNewMessageAction} from "../../BLL/messagesReducer";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        interlocutors: state.messages.interlocutors,
        messages: state.messages.messages,
        newMessageText: state.messages.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewMessage: (text) => {
            dispatch(AddNewMessageAction(text));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
            // withAuthRedirect
) (Messages);


// let AuthRedirectComponent = withAuthRedirect(Messages);
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// <Messages
//     interlocutors={props.state.messages.interlocutors}
//     messages={props.state.messages.messages}
//     newMessageText={props.state.messages.newMessageText}
//     dispatch={props.dispatch}
// />