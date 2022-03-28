import {v1} from "uuid";
//----------------TYPE--------------

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string,
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type ActionTypesMessage = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

//----------------ActionCreator-----------
export const addMessageActionCreator = () => ({
    type: "ADD_MESSAGE",
}) as const
export const updateNewMessageTextActionCreator = (newMessageText: string) => ({
    type: "UPDATE_NEW_MESSAGE",
    newMessageText
}) as const

//------------------initialState-----------
const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: "Misha"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Lex"},
        {id: v1(), name: "Artyom"},
    ],
    messages: [
        {id: v1(), message: "Hi!"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Fine, thanks!"},
        {id: v1(), message: "Yo!"},
        {id: v1(), message: "Bye!"},
    ],
    newMessageText: ""
}

//-------------------dialogsReducer---------------------
const dialogsReducer = (state: DialogsPageType = initialState,
                        action: ActionTypesMessage): DialogsPageType => {

    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {
                    id: v1(),
                    message: state.newMessageText
                }],
                newMessageText: "",
            }
        case "UPDATE_NEW_MESSAGE":
            return {...state, newMessageText: action.newMessageText};
        default:
            return state
    }
}
export default dialogsReducer