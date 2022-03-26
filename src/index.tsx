import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/redux_store";
import {Provider} from 'react-redux';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
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