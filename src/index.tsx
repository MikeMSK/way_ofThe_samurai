import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let dialogData = [
    {id: 1, name: "Misha"},
    {id: 2, name: "Igor"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Artur"},
    {id: 5, name: "Artyom"},
]
let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 1, message: "How are you?"},
    {id: 1, message: "Fine, thanks!"},
    {id: 1, message: "Yo!"},
    {id: 1, message: "Bye!"},
]
let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 5},
    {id: 1, message: "I`am fine, thanks you", likesCount: 10},
    {id: 1, message: "It`s cool", likesCount: 15},
    {id: 1, message: "Yes", likesCount: 20},
    {id: 1, message: "Fack you", likesCount: 25}
]

ReactDOM.render(
    <BrowserRouter>
        <App dialogData={dialogData}
             messagesData={messagesData}
             postData={postData}/>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

