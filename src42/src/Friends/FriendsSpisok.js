import React from "react";
import s from "./friends.module.css"
import {Friend} from "./Friend";

export const FriendsNum = (props) => {
    // debugger
    return (
        <div className={s.friends}>
            <div className={s.name}>Friends</div>

            {props.friends.map(s => <Friend name={s.name} id={s.id}/>)}
        </div>
    )
}

// className={s.friends}