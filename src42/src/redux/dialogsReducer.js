const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState ={
    dialogData: [
        {name: 'Olya', id: 1},
        {name: 'Max', id: 2},
        {name: 'Valentina', id: 3},
        {name: 'Alex', id: 4},
        {name: 'Sergei', id: 5},
    ],
    messageData: [
        {message: 'Hi', id: 1},
        {message: 'Ok', id: 2},
        {message: 'No', id: 3},
        {message: 'Yes', id: 4},
        {message: 'MB', id: 5},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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