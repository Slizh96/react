import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}

            </div>
            <div className={s.messages}>
                {props.messageData.map(m => <Message message={m.message}/>)}

            </div>
        </div>
    )
}

export default Dialogs