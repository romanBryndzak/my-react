import MyPost from "./My post";
import { updateNewTextAction} from "../../../BLL/ProfileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
};

const MyPostContainer = connect(mapStateToProps, {updateNewTextAction})(MyPost);

export default MyPostContainer;



// const MyPostContainer = (props) => {
//     let state = store.getState();
//     let postMessage = () => {
//         props.store.dispatch(addPostAction());
//     };
//     let postChange = (text) => {
//         props.store.dispatch(updateNewTextAction(text));
//     };
//     return ( <div>
//             <MyPost posts={state.profile.posts}
//                     newPostText={state.profile.newPostText}
//                     onPostMessage={postMessage}
//                     onPostChange={postChange}
//             />
//         </div>)
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onPostMessage: () => {
//             dispatch(addPostAction());
//         },
//         onPostChange: (text) => {
//             dispatch(updateNewTextAction(text));
//         }
//     }
// };