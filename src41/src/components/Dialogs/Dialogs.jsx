import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";




const Dialogs = (props) => {

    // let newMessages = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageAC())
    }

    let onMessageChange = (e) => {
        // let message = newMessages.current.value;
        let message = e.target.value;
        props.dispatch(updateNewMessageTextAC(message))
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
                        placeholder='Enter your message'
                        onChange={onMessageChange}
                        // ref={newMessages}
                        value={props.state.newMessageText}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs