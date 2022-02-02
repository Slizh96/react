import React, {createElement} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profileReducer";




const MyPosts = (props) => {
    let newPost = props.profilePage.postsData.map(m => <Post message={m.message} likesCount={m.likesCount}/>);

    let newPostData = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        // let text = newPostData.current.value;
        let text = e.target.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder='Enter your post'
                        onChange={onPostChange}
                        // ref={newPostData}
                    value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {newPost}

                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts