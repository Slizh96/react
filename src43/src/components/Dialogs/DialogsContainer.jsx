import React from "react";

import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;


    let addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMessageChange = (message) => {
        // let action = updateNewMessageTextAC(message);
        props.store.dispatch(updateNewMessageTextAC(message))
    }
    return (
        <Dialogs addMessage={addMessage}
                 updateNewMessageText={onMessageChange}
                 // newMessageText={state.messagePage.newMessageText}
            // messageData={state.messagePage.messageData}
            // dialogData={state.messagePage.dialogData}
                 messagePage={state}
        />
    )
}

export default DialogsContainer