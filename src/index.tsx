import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewPostText, subscribe, state, updateNewMessageText} from "./Redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App profilePage={state.profilePage}
                 dialogsPage={state.dialogsPage}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};
rerenderEntireTree();
subscribe(rerenderEntireTree);