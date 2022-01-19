import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 4},
    {id: 2, message: "It's  my first post", likesCount: 15}
]
let dialogData = [
    {name: 'Olya', id: 1},
    {name: 'Max', id: 2},
    {name: 'Valentina', id: 3},
    {name: 'Alex', id: 4},
    {name: 'Sergei', id: 5},
]
let messageData = [
    {message: 'Hi', id: 1},
    {message: 'Ok', id: 2},
    {message: 'No', id: 3},
    {message: 'Yes', id: 4},
    {message: 'MB', id: 5},
]
ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogData={dialogData} messageData={messageData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();