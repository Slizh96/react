import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


export const Message = (props) => {

    return (
        <div className={s.message}>
            <div>
            {props.message}
            </div>

        </div>
    )
}