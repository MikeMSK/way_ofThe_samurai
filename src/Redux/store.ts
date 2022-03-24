import profileReducer, {addPostActionСreator, updateNewPostTextActionСreator} from "./profile_reducer";
import dialogsReducer, {addMessageActionСreator, updateNewMessageTextActionСreator} from "./dialogs_reducer";
//state
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
//store
export type StoreType = {
    // _state: RootStateType
    // _onChange: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}
export type ActionTypes = ReturnType<typeof addMessageActionСreator>
    | ReturnType<typeof updateNewMessageTextActionСreator>
    | ReturnType<typeof addPostActionСreator>
    | ReturnType<typeof updateNewPostTextActionСreator>

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 5},
//                 {id: 2, message: "I`am fine, thanks you", likesCount: 10},
//                 {id: 3, message: "It`s cool", likesCount: 15},
//                 {id: 4, message: "Yes", likesCount: 20},
//                 {id: 5, message: "F you", likesCount: 25}
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Misha"},
//                 {id: 2, name: "Igor"},
//                 {id: 3, name: "Sasha"},
//                 {id: 4, name: "Lex"},
//                 {id: 5, name: "Artyom"},
//             ],
//             messages: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "Fine, thanks!"},
//                 {id: 4, message: "Yo!"},
//                 {id: 5, message: "Bye!"},
//             ],
//             newMessageText: ""
//         }
//     },
//     _onChange() {
//         console.log("state changed")
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._onChange = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._onChange();
//     }
// }

