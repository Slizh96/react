import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
let newPost=props.postsData.map(m=><Post message={m.message} likesCount={m.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add posts</button>
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