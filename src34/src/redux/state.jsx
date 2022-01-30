import React from "react";
import {rerender} from "../render";

export let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 4},
            {id: 2, message: "It's  my first post", likesCount: 15}
        ],
        newPostText: 'it'
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
        ]
    },
    frData: {
        friends: [
            {name: 'Roni', id: 1},
            {name: 'Mik', id: 2},
            {name: 'Pop', id: 3}
        ]
    }
}
export let addPost=()=>{
    let newPost={
        id:3,
        message: state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText=''
    rerender(state);
}

export let updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText ;
    rerender(state);
    }
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
