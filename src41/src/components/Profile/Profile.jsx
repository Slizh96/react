import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
                     />
        </div>
    )
}
export default Profile