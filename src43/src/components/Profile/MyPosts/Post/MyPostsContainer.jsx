import React, {createElement} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }
    let onPostChange = (text) => {
        // let action = updateNewPostTextAC(text);
        props.store.dispatch(updateNewPostTextAC(text));
    }
    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            // postsData={state.profilePage.postsData}
            profilePage={state}/>
    )
}

export default MyPostsContainer