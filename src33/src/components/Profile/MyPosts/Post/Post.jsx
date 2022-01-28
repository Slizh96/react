import React from "react";
import q from "./Post.module.css";

const Post = (props) => {
    console.log(props.message)
    return (
        <div className={q.item}>
            <img src='https://images.chesscomfiles.com/uploads/v1/user/41646238.ccf33e27.1200x1200o.d18425d9a348.jpeg'/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post
