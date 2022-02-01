import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

    let newMessages = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    let onMessageChange = () => {
        let message = newMessages.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newSms: message})
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}
                {/*{props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}*/}

            </div>
            <div className={s.messages}>
                {props.state.messageData.map(m => <Message message={m.message}/>)}
                <div>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessages}
                        value={props.state.newMessageText}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs