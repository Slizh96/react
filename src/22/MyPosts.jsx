import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add posts</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='4'/>
                <Post message="It's  my first post" likesCount='15'/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts
