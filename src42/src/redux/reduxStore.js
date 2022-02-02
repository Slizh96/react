import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";



let reducers= combineReducers({
    profilePage:profileReducer,
    messagePage:dialogsReducer,
    frData:friendsReducer
})

let store = createStore(reducers);


export default store