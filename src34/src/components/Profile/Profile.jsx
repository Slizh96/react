import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     />
        </div>
    )
}
export default Profile