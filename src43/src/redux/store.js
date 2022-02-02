import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 4},
                {id: 2, message: "It's  my first post", likesCount: 15}
            ],
            newPostText: ''
        },
        messagePage: {
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
        },
        frData: {
            friends: [
                {name: 'Roni', id: 1},
                {name: 'Mik', id: 2},
                {name: 'Pop', id: 3}
            ]
        }
    },
    _rerender() {
        console.log('ok')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerender = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.frData = friendsReducer(this._state.frData, action)
        this._rerender(this._state);

    }}

    export default store;

//
// let rerender =()=>{
// console.log('ok')
// }
//
// export let state = {
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 4},
//             {id: 2, message: "It's  my first post", likesCount: 15}
//         ],
//         newPostText: 'it'
//     },
//     messagePage: {
//         dialogData: [
//             {name: 'Olya', id: 1},
//             {name: 'Max', id: 2},
//             {name: 'Valentina', id: 3},
//             {name: 'Alex', id: 4},
//             {name: 'Sergei', id: 5},
//         ],
//         messageData: [
//             {message: 'Hi', id: 1},
//             {message: 'Ok', id: 2},
//             {message: 'No', id: 3},
//             {message: 'Yes', id: 4},
//             {message: 'MB', id: 5},
//         ],
//         newMessageText: 'sms'
//     },
//     frData: {
//         friends: [
//             {name: 'Roni', id: 1},
//             {name: 'Mik', id: 2},
//             {name: 'Pop', id: 3}
//         ]
//     }
// }
// export const addPost = () => {
//     let newPost = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.postsData.push(newPost);
//     state.profilePage.newPostText = ''
//     rerender(state);
// }
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerender(state);
// }
//
// export const addMessage = () => {
//     let newMessage = {
//         id: 6,
//         message: state.messagePage.newMessageText
//     };
//     state.messagePage.messageData.push(newMessage);
//     state.messagePage.newMessageText = ''
//     rerender(state);
// }
// export const updateNewMessageText = (newSms) => {
//     state.messagePage.newMessageText = newSms;
//     rerender(state);
// }
//
// export const subscribe=(observer)=>{
// rerender=observer
// }
// let postsData = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 4},
//     {id: 2, message: "It's  my first post", likesCount: 15}
// ]
// let dialogData = [
//     {name: 'Olya', id: 1},
//     {name: 'Max', id: 2},
//     {name: 'Valentina', id: 3},
//     {name: 'Alex', id: 4},
//     {name: 'Sergei', id: 5},
// ]
// let messageData = [
//     {message: 'Hi', id: 1},
//     {message: 'Ok', id: 2},
//     {message: 'No', id: 3},
//     {message: 'Yes', id: 4},
//     {message: 'MB', id: 5},
// ]
