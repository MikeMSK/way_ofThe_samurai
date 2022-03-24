import React, {FC} from 'react';
import {StoreType,} from "../../../Redux/store"
import {addPostActionСreator, updateNewPostTextActionСreator} from "../../../Redux/profile_reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}
//____________container component_______
export const MyPostsContainer: FC<MyPostsPropsType> = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        const action = addPostActionСreator(state.profilePage.newPostText)
        props.store.dispatch(action)
    }
    const onPostChange = (text: string) => {
        const action = updateNewPostTextActionСreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={onPostChange}/>
};

