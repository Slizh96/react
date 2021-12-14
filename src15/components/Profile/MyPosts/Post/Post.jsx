import React from "react";
import q from "./Post.module.css";

const Post = () => {
    return (
        <div className={q.item}>
            <img src='https://images.chesscomfiles.com/uploads/v1/user/41646238.ccf33e27.1200x1200o.d18425d9a348.jpeg'/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post
