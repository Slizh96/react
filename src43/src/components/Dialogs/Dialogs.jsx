import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";




const Dialogs = (props) => {
let newDialog= props.messagePage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let newMes=props.messagePage.messageData.map(m => <Message message={m.message}/>)
    let newMessages = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        // let message = newMessages.current.value;
        let message = e.target.value;
        props.updateNewMessageText(message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newDialog}
                {/*{props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)}*/}

            </div>
            <div className={s.messages}>
                {newMes}
                <div>
                    <textarea
                        placeholder='Enter your message'
                        onChange={onMessageChange}
                        // ref={newMessages}
                        value={props.messagePage.newMessageText}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs