import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // postsData={props.state.postsData}
                // newPostText={props.state.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile