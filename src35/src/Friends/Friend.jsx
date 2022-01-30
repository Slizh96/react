import React from "react";
import s from "./friends.module.css"

export const Friend=(props)=>{
    return(
        <div >

            <div className={s.image}>
            <img src={'https://w7.pngwing.com/pngs/662/224/png-transparent-little-owl-t-shirt-bird-color-owl-avatar-color-splash-painted-heroes.png'} className={s.image}/>
            {props.name}
            </div>
        </div>
    )
}