import {ActionTypes, PostType, ProfilePageType} from "./store";


const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "I`am fine, thanks you", likesCount: 10},
        {id: 3, message: "It`s cool", likesCount: 15},
        {id: 4, message: "Yes", likesCount: 20},
        {id: 5, message: "F you", likesCount: 25}
    ],
    newPostText: ""
}

export const addPostActionСreator = (postText: string) => ({
    type: "ADD-POST",
    postText
}) as const
export const updateNewPostTextActionСreator = (newPostText: string) => ({
    type: "UPDATE_NEW_POST",
    newPostText
}) as const

const profileReducer = (state:ProfilePageType = initialState,
                        action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
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