import {ActionTypes, DialogsPageType, MessagesType} from "./store";


const initialState = {
    dialogs: [
        {id: 1, name: "Misha"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Lex"},
        {id: 5, name: "Artyom"},
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Fine, thanks!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Bye!"},
    ],
    newMessageText: ""
}

export const addMessageActionСreator = (messageText: string) => ({
    type: "ADD_MESSAGE",
    messageText
}) as const
export const updateNewMessageTextActionСreator = (newMessageText: string) => ({
    type: "UPDATE_NEW_MESSAGE",
    newMessageText
}) as const

const dialogsReducer = (state: DialogsPageType = initialState,
                        action: ActionTypes) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.messageText
            }
            state.messages.push(newMessage);
            state.newMessageText = ""
            return state
        case "UPDATE_NEW_MESSAGE":
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state
    }
}
export default dialogsReducer;