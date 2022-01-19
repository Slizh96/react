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
    let dialogData = [
        {name: 'Olya', id: 1},
        {name: 'Max', id: 2},
        {name: 'Valentina', id: 3},
        {name: 'Alex', id: 4},
        {name: 'Sergei', id: 5},
    ]
    let messageData = [
        {message: 'Hi', id: 1},
        {message: 'Ok', id: 2},
        {message: 'No', id: 3},
        {message: 'Yes', id: 4},
        {message: 'MB', id: 5},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}

            </div>
            <div className={s.messages}>
                {messageData.map(m => <Message message={m.message}/>)}

            </div>
        </div>
    )
}

export default Dialogs