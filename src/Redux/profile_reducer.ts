import React from "react";


//----------------TYPE--------------
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type ActionTypesPost =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

//----------------ActionCreator-----------
export const addPostActionCreator = () => ({
    type: "ADD-POST",
}) as const
export const updateNewPostTextActionCreator = (newPostText: string) => ({
    type: "UPDATE_NEW_POST",
    newPostText
}) as const

//------------------initialState-----------
const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "I`am fine, thanks you", likesCount: 10},
        {id: 3, message: "It`s cool", likesCount: 15},
        {id: 4, message: "Yes", likesCount: 20},
        {id: 5, message: "F you", likesCount: 25}
    ],
    newPostText: ""
}

//-------------------profileReducer---------------------
const profileReducer = (state: ProfilePageType = initialState,
                        action: ActionTypesPost): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case "UPDATE_NEW_POST":
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;

    }
}
export default profileReducer;