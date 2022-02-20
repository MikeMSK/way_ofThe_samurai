import {ActionTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: action.postText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = ""

    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newPostText;
    }
    return state;
}
export default profileReducer;