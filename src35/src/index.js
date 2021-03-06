import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";
import ReactDOM from "react-dom";

export let rerender=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(state);

subscribe(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();