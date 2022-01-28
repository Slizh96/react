import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
    let newMessages = React.createRef()
    let addMessage = () => {
        let mes = newMessages.current.value;
        alert(mes)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogData.map(d=><DialogItem name={d.name} id={d.id}/>)}
                {/*{props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}*/}

            </div>
            <div className={s.messages}>
                {props.state.messageData.map(m => <Message message={m.message}/>)}
                <div>
                    <textarea ref={newMessages}></textarea>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs