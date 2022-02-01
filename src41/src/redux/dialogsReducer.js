const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case  ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = ''
            return state;
        case  UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newSms;
            return state;
        default:
            return state
    }
   }
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextAC = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newSms: message
    }
}
export default dialogsReducer;