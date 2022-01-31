import {rerenderEntireTree} from "../render";

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
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 5},
            {id: 1, message: "I`am fine, thanks you", likesCount: 10},
            {id: 1, message: "It`s cool", likesCount: 15},
            {id: 1, message: "Yes", likesCount: 20},
            {id: 1, message: "F you", likesCount: 25}
        ],
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
    },
}

export let addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: new Date().getTime(), //??????
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}
export let addMessage = (message: string) => {
    const newMessage: MessagesType = {
        id: new Date().getTime(), //??????
        message: message,

    }
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state)
}