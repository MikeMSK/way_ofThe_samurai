//----------------TYPE--------------
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number,
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

//-------------------dialogsReducer---------------------
const dialogsReducer = (state: DialogsPageType = initialState,
                        action: ActionTypesMessage): DialogsPageType => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: state.newMessageText
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
export default dialogsReducer