import React from "react";
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
    _state: RootStateType
    _onChange: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: AddPostActionType
        | UpdatePostActionType
        | AddMessageActionType
        | UpdateMessageActionType) => void
}
//dispatch
type AddPostActionType = {
    type: "ADD-POST",
    postText: string
}
type UpdatePostActionType = {
    type: "UPDATE-NEW-POST",
    newText: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE",
    messageText: string
}
type UpdateMessageActionType = {
    type: "UPDATE-NEW-MESSAGE",
    newMessageText: string
}
export type ActionTypes = AddPostActionType | UpdatePostActionType | AddMessageActionType | UpdateMessageActionType
// action creator
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
// AC profile
export const addPostAС = (postText: string): AddPostActionType => {
    return {type: ADD_POST, postText: postText}
}
export const updateNewPostTextAС = (newText: string): UpdatePostActionType => {
    return {type: UPDATE_NEW_POST, newText: newText}
}
// AC dialogs
export const addMessageAС = (messageText: string): AddMessageActionType => {
    return {type: ADD_MESSAGE, messageText: messageText}
}
export const updateNewMessageTextAС = (newMessageText: string): UpdateMessageActionType => {
    return {type: UPDATE_NEW_MESSAGE, newMessageText: newMessageText}
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 5},
                {id: 1, message: "I`am fine, thanks you", likesCount: 10},
                {id: 1, message: "It`s cool", likesCount: 15},
                {id: 1, message: "Yes", likesCount: 20},
                {id: 1, message: "F you", likesCount: 25}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Misha"},
                {id: 2, name: "Igor"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Lex"},
                {id: 5, name: "Artyom"},
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 1, message: "How are you?"},
                {id: 1, message: "Fine, thanks!"},
                {id: 1, message: "Yo!"},
                {id: 1, message: "Bye!"},
            ],
            newMessageText: ""
        }
    },
    _onChange() {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._onChange = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._onChange()
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.messageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ""
            this._onChange()
        } else if (action.type === "UPDATE-NEW-POST") {
            this._state.profilePage.newPostText = action.newText;
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._onChange()
        }
    }
}


// addPost() {
//     const newPost: PostType = {
//         id: new Date().getTime(),
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     }
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = ""
//     this._onChange()
// },
// addMessage() {
//     const newMessage: MessagesType = {
//         id: new Date().getTime(),
//         message: this._state.dialogsPage.newMessageText
//     }
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newMessageText = ""
//     this._onChange()
//
// },
// updateNewPostText(newText: string) {
//     this._state.profilePage.newPostText = newText;
//     this._onChange()
// },
// updateNewMessageText(newText: string) {
//     this._state.dialogsPage.newMessageText = newText;
//     this._onChange()
// },