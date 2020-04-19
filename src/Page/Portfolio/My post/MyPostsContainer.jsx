import React from "react";
import MyPost from "./My post";
import {addPostAction, updateNewTextAction} from "../../../BLL/portfolioReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.portfolio.posts,
        newPostText: state.portfolio.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostMessage: () => {
            dispatch(addPostAction());
        },
        onPostChange: (text) => {
            dispatch(updateNewTextAction(text));
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;


// const MyPostContainer = (props) => {
//     let state = store.getState();
//
//     let postMessage = () => {
//         props.store.dispatch(addPostAction());
//     };
//
//     let postChange = (text) => {
//         props.store.dispatch(updateNewTextAction(text));
//     };
//
//     return (
//         <div>
//             <MyPost posts={state.portfolio.posts}
//                     newPostText={state.portfolio.newPostText}
//                     onPostMessage={postMessage}
//                     onPostChange={postChange}
//             />
//         </div>
//     )
// };