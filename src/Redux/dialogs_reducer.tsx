import React from "react";
import {MessagesType} from "./state";


const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {

    if (action.type === ADD_MESSAGE) {
        const newMessage: MessagesType = {
            id: new Date().getTime(),
            message: action.messageText
        }
        state.messages.push(newMessage);
        state.newMessageText = ""
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.newMessageText;
    }
    return state;
}
export default dialogsReducer;