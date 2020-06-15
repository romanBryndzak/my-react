import React from "react";
import ProfileReducer, {deletePostAction, updateNewTextAction} from "./ProfileReducer";

const state = {
    posts: [
        {id: 0, message: 'Hello!', like: 10},
        {id: 1, message: 'How are you.', like: 8},
        {id: 2, message: 'I am fine, thank you. And you?', like: 0}
    ]
};

test ('Length post should be incremented', () => {

    const action = updateNewTextAction ('Hello');

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

test ('Text in new post should be correct', () => {

    const action = updateNewTextAction ('Hello');

    let newState = ProfileReducer(state, action);

    expect(newState.posts[3].message).toBe('Hello');
});

test ('After deleting length post should be decrement', () => {

    const action = deletePostAction (1);

    let newState = ProfileReducer(state, action);

   expect(newState.posts.length).toBe(3);
});

test ('After deleting length post should not be decrement if postId is incorrect', () => {

    const action = deletePostAction (100);

    let newState = ProfileReducer(state, action);

   expect(newState.posts.length).toBe(3);
});
