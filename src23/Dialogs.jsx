import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'./dialogs/' + props.id}>
                {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Olya' id='1'/>
                <DialogItem name='Max' id='2'/>
                <DialogItem name='Valentina' id='3'/>
                <DialogItem name='Alex' id='4'/>
                <DialogItem name='Sergei' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Ok'/>
                <Message message='No'/>
                <Message message='Yes'/>
                <Message message='MB'/>
            </div>
        </div>
    )
}

export default Dialogs