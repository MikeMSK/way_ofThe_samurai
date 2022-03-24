import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/redux_store";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree();

//const rerenderEntireTree = (state: RootStateType)
// rerenderEntireTree(store.getState())
//
// store.subscribe(() => {
//     const state = store.getState();
//     rerenderEntireTree(state)
// })