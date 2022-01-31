import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, RootStateType} from "./Redux/state";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App profilePage={state.profilePage}
                 dialogsPage={state.dialogsPage}
                 addPost={addPost}
                 addMessage={addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

