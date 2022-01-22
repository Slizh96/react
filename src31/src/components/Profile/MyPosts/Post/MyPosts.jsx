import React, {createElement} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
let newPost=props.postsData.map(m=><Post message={m.message} likesCount={m.likesCount}/>)
    let newPostData=React.createRef();
    const addPost=()=>{
    let text=newPostData.current.value;
    alert(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostData}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add posts</button>
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