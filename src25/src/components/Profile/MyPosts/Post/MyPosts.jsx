import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: "It's  my first post", likesCount: 15}
    ]
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
                {postsData.map(m=><Post message={m.message} likesCount={m.likesCount}/>)}

                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts
