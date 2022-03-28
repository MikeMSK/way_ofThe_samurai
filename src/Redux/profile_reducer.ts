import {v1} from "uuid";

//----------------TYPE--------------
export type PostType = {
    id: string,
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
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: "UPDATE_NEW_POST",
    newText
}) as const

//------------------initialState-----------
const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 5},
        {id: v1(), message: "I`am fine, thanks you", likesCount: 10},
        {id: v1(), message: "It`s cool", likesCount: 15},
        {id: v1(), message: "Yes", likesCount: 20},
        {id: v1(), message: "F you", likesCount: 25}
    ],
    newPostText: ""
}

//-------------------profileReducer---------------------
const profileReducer = (state: ProfilePageType = initialState,
                        action: ActionTypesPost): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: v1(),
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: ""
            };

        case "UPDATE_NEW_POST":
            return {...state, newPostText: action.newText}
        default:
            return state;
    }
}
export default profileReducer;